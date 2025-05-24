# Build stage
FROM oven/bun:1.2 as builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy application code
COPY . .

# Build the application
RUN bun run build

# Production stage using distroless
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

# Copy only necessary files from build stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["server.js"] 