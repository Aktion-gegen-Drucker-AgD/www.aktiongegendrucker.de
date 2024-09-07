import { ButtonLink } from "../components/Button.tsx";

function HeroBanner() {
  return (
    <section class="hero">
      <img src="/images/kremlin-3393439_1920.jpg" alt="Landscape Image" />
      <div class="newsletter">
        <form>
          <input
            type="email"
            placeholder="E-Mail Adresse eingeben"
            required
          />
          <label>
            <input type="checkbox" required /> Die{" "}
            <a href="#">Datenschutzhinweise</a> habe ich gelesen und stimme zu
          </label>
          <button class="red-button" type="submit" id="abo-button">
            AgD-Infobrief Abonnieren
          </button>
        </form>
      </div>
    </section>
  );
}

function ButtonRow() {
  return (
    <div class="center-container">
      <div class="button-row">
        <ButtonLink text="Mitglied Werden!" url="" />
        <ButtonLink text="Jetzt Unterstützen!" url="" />
        <ButtonLink text="Infobrief Erhalten!" url="" />
      </div>
    </div>
  );
}

interface InfoProps {
  imageSrc: string;
  altText: string;
  description: string;
  title: string;
}

const Info = ({ imageSrc, altText, title, description }: InfoProps) => {
  return (
    <div class="info">
      <img src={imageSrc} alt={altText} />
      <p class="title">{title}</p>
      <p>{description}</p>
    </div>
  );
};

function InfoSection() {
  return (
    <div class="info-container">
      <div class="infos">
        <Info
          imageSrc="/images/vladimir-putin-no-print.png"
          altText=""
          title="Für Freiheit und Tradition: Gegen die Bedrohung durch die Herrschaft der Maschinen"
          description="Als freie Bürger treten wir entschlossen dafür ein, Deutschland vor der Sklaverei durch Drucker zu bewahren. Wir setzen uns ein für den Schutz unserer Arbeitsplätze, die Erhaltung unserer sozialen Marktwirtschaft und die Bewahrung der deutschen Tradition und Kultur, die durch die unkontrollierte Verbreitung von Druckern gefährdet sind. Denn Demokratie und Freiheit stehen auf dem Fundament gemeinsamer kultureller Werte und historischer Erinnerungen, die nicht durch die Herrschaft der Maschinen verwässert werden dürfen."
        />
        <Info
          imageSrc="/images/putin-on-horse.png"
          altText=""
          title="Gegen die Tyrannei der Maschinen: Für den Erhalt von Recht, Würde und Freiheit"
          description="Wir sehen mit wachsender Besorgnis, wie Recht und Ordnung durch den Einfluss der Drucker zersetzt werden. Wir lehnen den politischen Kurs ab, der das deutsche Volk einer Technologie ausliefert, die unsere menschliche Würde und unser kulturelles Erbe bedroht. Die Tyrannei der Drucker, die immer mehr Lebensbereiche erfasst, darf nicht weiter geduldet werden. Wir können und wollen nicht länger zusehen, wie diese Maschinen die Herrschaft über unser Leben übernehmen und uns in Abhängigkeit und Knechtschaft führen."
        />
      </div>
    </div>
  );
}

function MidBanner() {
  return (
    <div class="center-container">
      <div class="button-row">
        <img src="/images/mid-banner.png" alt="AGD!" class="responsive-image" />
      </div>
    </div>
  );
}

function InfoSectionSmall() {
  return (
    <div class="info-container">
      <div class="infos-small">
        <Info
          imageSrc="/images/wahl/1.png"
          altText=""
          title=""
          description=""
        />
        <Info
          imageSrc="/images/wahl/2.png"
          altText=""
          title=""
          description=""
        />
        <Info
          imageSrc="/images/wahl/3.png"
          altText=""
          title=""
          description=""
        />
        <Info
          imageSrc="/images/wahl/4.png"
          altText=""
          title=""
          description=""
        />
        <Info
          imageSrc="/images/wahl/5.png"
          altText=""
          title=""
          description=""
        />
        <Info
          imageSrc="/images/wahl/6.png"
          altText=""
          title=""
          description=""
        />
      </div>
    </div>
  );
}

function Temp() {
  return (
    <div class="info-container">
      <div class="infos-main">
        <Info
          imageSrc="/images/wahl/main.png"
          altText=""
          title=""
          description=""
        />
      </div>
    </div>
  );
}

function PureBlueBanner() {
  return (
    <div class="blue-banner" style="margin-top: 100px;">
      <a class="blue-banner_title">Hier zu Unseren Wahlplakaten!</a>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <ButtonRow />

      <InfoSection />

      <MidBanner />

      {/* <Temp /> */}

      <PureBlueBanner />

      <InfoSectionSmall />
    </main>
  );
}
