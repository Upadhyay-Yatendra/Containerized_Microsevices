# # Stage 1: Build the application
# FROM node:20
# # Set the working directory
# WORKDIR /app
# # Copy package.json and package-lock.json
# COPY package.json ./
# COPY package-lock.json ./
# # Install dependencies
# RUN npm install
# # Copy the rest of the application code
# COPY ./ ./
# # Build the Next.js app
# RUN npm run build
# CMD [ "npm","start" ]

# # Basically this is running it in prod so when you make a change you will have to rebuild again to see the effects 
# # for hot reloading run it in dev


# Development stage
FROM node:20 AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app in development mode
CMD ["npm", "run", "dev"]

# Production stage
FROM node:20 AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ ./

# Build the Next.js app
RUN npm run build

# Command to run the app in production mode
CMD ["npm", "start"]