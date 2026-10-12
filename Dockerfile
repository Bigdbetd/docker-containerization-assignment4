# Use the Node.js 16 image, which includes Node.js and npm.
FROM node:16

# Set the working directory for all following commands.
WORKDIR /app

# Copy dependency manifests before the rest of the app to reuse cached layers.
COPY package*.json ./

# Install the application dependencies using npm.
RUN npm install

# Copy all remaining application files into the image.
COPY . .

# Document the port used by the application.
EXPOSE 3000

# Start the server using the package.json start script.
CMD ["npm", "start"]
