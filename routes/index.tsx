

export default function Home() {
  return (
    <main>
        <section class="hero">
            <img src="/images/index_bg_top.png" alt="Landscape Image" />
            <div class="newsletter">
                <form>
                    <input type="email" placeholder="E-Mail Adresse eingeben" required />
                    <label>
                        <input type="checkbox" required /> Die <a href="#">Datenschutzhinweise</a> habe ich gelesen und stimme zu
                    </label>
                    <button type="submit">AfD-Infobrief Abonnieren</button>
                </form>
            </div>
        </section>

        <section class="actions">
            <button>Mitglied werden!</button>
            <button>Jetzt spenden!</button>
            <button>Infobrief erhalten!</button>
        </section>

        <section class="leaders">
            <div class="leader">
                <img src="/images/leader_right.png" alt="Alice Weidel" />
                <p>Alice Weidel / Tino Chrupalla: Das Verbot des...</p>
            </div>
            <div class="leader">
                <img src="/images/leader_right.png" alt="Other Leader" />
                <p>Another leader's content...</p>
            </div>
        </section>
    </main>  );
}
