import { defineConfig } from "$fresh/server.ts";

const port = Number(Deno.env.get("PORT")) || 8000;

export default defineConfig({
    port: port,
});
