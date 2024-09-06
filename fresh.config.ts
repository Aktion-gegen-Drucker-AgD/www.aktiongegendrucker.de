import { defineConfig } from "$fresh/server.ts";

const port = Number(Deno.env.get("DENO_PORT")) || 8000;

const certFile = Deno.env.get("DENO_CERTFILE") || undefined;
const keyFile = Deno.env.get("DENO_KEYFILE") || undefined;

export default defineConfig({
    port: port,
    cert: certFile,
    key: keyFile,
});
