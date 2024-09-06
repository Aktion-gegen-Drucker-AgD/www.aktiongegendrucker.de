FROM denoland/deno:latest

COPY . /app/
WORKDIR /app

CMD [ "task", "start" ]