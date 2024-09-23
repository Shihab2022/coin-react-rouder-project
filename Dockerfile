FROM node:18-alpine as builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the app
COPY . .
RUN npm run build

# Final image
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html