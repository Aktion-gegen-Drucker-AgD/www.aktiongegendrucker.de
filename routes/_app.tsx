import { type PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>www.test</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
        <script src="/bootstrap/js/bootstrap.bundle.js"></script>
      </head>
      <body>
        <Header />
        <Component />
      </body>
    </html>
  );
}
