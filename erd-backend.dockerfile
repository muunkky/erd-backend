# erd-backend/erd-backend.dockerfile
# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on (adjust if your app runs on a different port)
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]
