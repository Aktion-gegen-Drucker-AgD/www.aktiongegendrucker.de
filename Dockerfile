FROM denoland/deno:latest

ENV PORT=80

COPY . /app/
WORKDIR /app

CMD [ "task", "start" ]