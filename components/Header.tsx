export function Header() {
    return (
        <header>
            <div class="main">
                <a href="#home" class="logo">
                    <img src="/images/agd-logo.png" alt="Logo" />
                </a>

                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#about">Über uns</a>
                        </li>
                        <li>
                            <a href="#contact">Kontakt</a>
                        </li>
                        <li>
                            <a href="#contact">Kontakt</a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <img src="search-icon.png" alt="Search" />
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
