import { NextRequest } from "next/server";

type Handler = (req: NextRequest, context?: any) => Promise<Response>;

interface WithAPIHandlerOptions {
  requireAuth?: boolean;
  cors?: boolean;
}

export function withAPIHandler(
  handler: Handler,
  options: WithAPIHandlerOptions = {}
) {
  return async (req: NextRequest, context?: any) => {
    // Start timing
    const startTime = Date.now();

    try {
      // Add CORS headers if enabled
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (options.cors) {
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] =
          "GET, POST, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
      }

      // Handle OPTIONS request for CORS
      if (req.method === "OPTIONS") {
        return new Response(null, { headers });
      }

      // Check authentication if required
      if (options.requireAuth) {
        const token = req.headers.get("Authorization")?.replace("Bearer ", "");

        if (!token) {
          return new Response(
            JSON.stringify({ error: "Authentication required" }),
            { status: 401, headers }
          );
        }

        // Here you would validate the token
        // For now, just checking if it exists
      }

      // Call the original handler
      const response = await handler(req, context);

      // Log the request
      console.log({
        method: req.method,
        path: req.nextUrl.pathname,
        status: response.status,
        duration: Date.now() - startTime,
      });

      return response;
    } catch (error) {
      // Log the error
      console.error("API Error:", {
        method: req.method,
        path: req.nextUrl.pathname,
        error: error instanceof Error ? error.message : "Unknown error",
        duration: Date.now() - startTime,
      });

      return new Response(
        JSON.stringify({
          error: "Internal Server Error",
          details: error instanceof Error ? error.message : "Unknown error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  };
}
