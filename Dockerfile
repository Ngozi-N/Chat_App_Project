# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /chat-app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
