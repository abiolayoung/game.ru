# Use official Node.js 18 image
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Start the app
EXPOSE 3000
CMD ["npm", "start"] 