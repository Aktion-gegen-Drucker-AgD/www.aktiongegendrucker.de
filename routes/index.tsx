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
          <button type="submit">AgD-Infobrief Abonnieren</button>
        </form>
      </div>
    </section>
  );
}

function ButtonRow() {
  return (
    <div class="button-row">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
}

function InfoSection() {
  interface LeaderProps {
    imageSrc: string;
    altText: string;
    description: string;
  }

  const Leader = ({ imageSrc, altText, description }: LeaderProps) => {
    return (
      <div className="leader">
        <img src={imageSrc} alt={altText} />
        <p>{description}</p>
      </div>
    );
  };

  return (
    <section class="leaders">
      <Leader
        imageSrc="/images/leader_right.png"
        altText=""
        description="ye"
      />
      <Leader
        imageSrc="/images/leader_right.png"
        altText=""
        description="ye"
      />
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroBanner />

      {/* <ButtonRow /> */}

      {/* <InfoSection /> */}
    </main>
  );
}
