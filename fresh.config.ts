import { defineConfig } from "$fresh/server.ts";

const port = Number(Deno.env.get("DENO_PORT")) || 8000;

const certFile = Deno.env.get("DENO_CERTFILE");
const keyFile = Deno.env.get("DENO_KEYFILE");

const cert = certFile ? await Deno.readTextFile(certFile) : undefined;
const key = keyFile ? await Deno.readTextFile(keyFile) : undefined;

export default defineConfig({
    port: port,
    cert: cert,
    key: key,
});
