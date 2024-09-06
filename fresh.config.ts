import { defineConfig } from "$fresh/server.ts";

const port = Number(Deno.env.get("DENO_PORT")) || 8000;

const certFile = Deno.env.get("DENO_CERTFILE");
const keyFile = Deno.env.get("DENO_KEYFILE");

if (certFile && keyFile) {
    try {
        await Deno.stat(certFile);
        await Deno.stat(keyFile);
    } catch (error) {
        console.error("Error accessing certificate or key file:", error);
        Deno.exit(1);
    }
} else {
    console.error("Cert file or key file not specified.");
    Deno.exit(1);
}

export default defineConfig({
    port: port,
    cert: certFile,
    key: keyFile,
});
