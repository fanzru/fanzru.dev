# fanzru.dev

Personal website built with Next.js 15, React 19, and TailwindCSS.

## Features

- Built with Next.js 15 and React 19
- MDX for blog content
- Three.js and React Three Fiber for 3D elements
- Responsive design with TailwindCSS
- Framer Motion for animations

## Getting Started

### Development

Run the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun (recommended)
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
# Using npm
npm run build

# Using bun
bun run build
```

## Docker Deployment

The project includes a multi-stage Dockerfile with a distroless production image for optimal security and size.

### Build the Docker image

```bash
docker build -t fanzru-dev .
```

### Run the Docker container

```bash
docker run -p 3000:3000 fanzru-dev
```

## Project Structure

- `src/app/` - Next.js application pages and routes
- `src/components/` - Reusable React components
- `src/lib/` - Utilities and helper functions
- `content/blog/` - MDX blog content
- `public/` - Static assets

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)
- [Three.js](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
