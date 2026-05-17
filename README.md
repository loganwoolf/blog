# Blog

A SvelteKit-powered blog with PocketBase backend integration.

## Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

## Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description |
|----------|-------------|
| `PB_URL` | PocketBase API URL. Set to `bypass` to skip PocketBase (for working on non-post routes) |
| `ADAPTER` | Set to `node` for production deployment (optional, defaults to auto) |

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start with browser open
pnpm dev -- --open
```

## Production

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# Preview production build
pnpm preview
```

For a Node.js server deployment, set the adapter:

```bash
ADAPTER=node pnpm build
```

The built app will be in the `build/` directory (or `dist/` with node adapter).

### Running the Production Server

With the node adapter, run:

```bash
node build/index.js
```

Or use a process manager like `pm2`:

```bash
pm2 start build/index.js
```

## Code Quality

```bash
# Type checking
pnpm check

# Format code
pnpm format

# Lint
pnpm lint

# Fix lint issues
pnpm fix
```
