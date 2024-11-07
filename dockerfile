# Base image for building
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files to container
COPY . .

# Build the Next.js application
RUN npm run build

# Production image for serving the app
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built app from the builder stage
COPY --from=builder /app ./

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]

RUN npx prettier --write .

