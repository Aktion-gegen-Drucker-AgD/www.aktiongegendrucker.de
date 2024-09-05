import { Head } from "$fresh/runtime.ts";
export function Cookies() {
    return (
        <>
            <Head>
                <script src="/cookies/cookie.js" defer></script>
            </Head>
            <div>
                <div id="cookie-banner">
                    <p>
                        Diese Website verwendet keine Cookies.
                         <button id="cookie-btn">OK</button>
                    </p>
                </div>
            </div>
        </>
    );
}
