FROM node:18-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN rm -rf dist
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/web-enduser /usr/share/nginx/html
