# Use an official Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build your app (optional)
RUN npm run build

# Expose app port (optional)
EXPOSE 3000

# Command to run app
CMD ["npm", "start"]
