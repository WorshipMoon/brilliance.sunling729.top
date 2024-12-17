FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN enable pnpm && pnpm i --frozen-lockfile;

COPY . .

RUN npm run build

# Production Stage 

FROM node:18-alpine AS production

WORKDIR /app

# Copy the built artifacts from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set the environment variables (if needed)
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]