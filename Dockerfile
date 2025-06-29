# Use official Node.js image as the build stage
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /wang_wei_ui_garden

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Use official nginx image to serve the built app
FROM nginx:alpine

# Copy the build output from the previous stage to nginx's public folder
COPY --from=build /wang_wei_ui_garden/build /usr/share/nginx/html
# Expose port 8083 for the container
EXPOSE 8083

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
