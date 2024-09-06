function HeroBanner() {
  return (
    <section class="hero">
      <img src="/images/index_bg_top.png" alt="Landscape Image" />
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
          <button class="red-button" type="submit">
            AgD-Infobrief Abonnieren
          </button>
        </form>
      </div>
    </section>
  );
}

function ButtonRow() {
  return (
    <div class="button-row">
      <button class="red-button">Button 1</button>
      <button class="red-button">Button 2</button>
      <button class="red-button">Button 3</button>
    </div>
  );
}

function InfoSection() {
  interface InfoProps {
    imageSrc: string;
    altText: string;
    description: string;
  }

  const Info = ({ imageSrc, altText, description }: InfoProps) => {
    return (
      <div class="info">
        <img src={imageSrc} alt={altText} />
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div class="info-container">
      <div class="infos">
        <Info
          imageSrc="/images/leader_right.png"
          altText=""
          description="ye"
        />
        <Info
          imageSrc="/images/leader_right.png"
          altText=""
          description="ye"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <ButtonRow />

      <InfoSection />

      {
        /* <InfoSection />
      <InfoSection />
      <InfoSection />
      <InfoSection /> */
      }
    </main>
  );
}
