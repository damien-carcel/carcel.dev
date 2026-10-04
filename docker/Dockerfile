FROM oven/bun:slim

ARG DEV_UID
ARG DEV_GID

RUN groupmod --gid $DEV_GID bun && \
    usermod --uid $DEV_UID --gid $DEV_GID bun

USER bun:bun
