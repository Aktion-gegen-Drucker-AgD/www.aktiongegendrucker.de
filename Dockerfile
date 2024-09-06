FROM denoland/deno:latest

ENV PORT=80

VOLUME [ "/cert" ]

COPY . /app/
WORKDIR /app

CMD [ "task", "start" ]