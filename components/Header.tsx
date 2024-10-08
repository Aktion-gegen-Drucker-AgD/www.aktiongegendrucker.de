export function Header() {
    return (
        <header>
            <div class="main">
                <a href="/" class="logo">
                    <img src="/images/agd-logo.png" alt="Logo" />
                </a>

                <nav class="navbar navbar-expand-lg">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/kontakt">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
