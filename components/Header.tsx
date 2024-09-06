export function Header() {
    return (
        <header>
            <div class="main">
                <a href="#home" class="logo">
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
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">Über uns</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
