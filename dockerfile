# Start from the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js application (adjust if needed for your project structure)
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
