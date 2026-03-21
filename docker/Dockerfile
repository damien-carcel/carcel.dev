FROM node:lts-slim

ARG DEV_UID
ARG DEV_GID

RUN groupmod --gid $DEV_GID node && \
    usermod --uid $DEV_UID --gid $DEV_GID node

RUN npm install -g bun

USER node:node
