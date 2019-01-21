FROM node:11.0.0-alpine

RUN apk update && \
    apk add vim git && \
    npm install -g npm@6.4.1 \
                   cordova ionic@4.4.0 \
                   gulp \
                   bower

ARG project_dir=/app/

ADD . ${project_dir}
WORKDIR ${project_dir}

# PORT:35729 is a hot reload service
EXPOSE 8100 35729

RUN adduser -D docker

USER docker

# CMD ["ionic", "serve", "--all", "--port", "8100", "--livereload-port", "35729"]
CMD ["ionic", "serve", "--host=0.0.0.0"]
