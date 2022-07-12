# Implementing Multi-Step Build

FROM node:18-alpine as builder

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node ./ ./

RUN npm run build

# /app/build <---- alle the stuff we care about

# New building phase:

FROM nginx
COPY --from=builder /home/node/app/build /usr/share/nginx/html



