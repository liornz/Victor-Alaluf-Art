import styles from './press.module.scss';
import Link from 'next/link';
interface Props {}

const Press: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>German</h1>
      <section className={styles.section}>
        <h3>
          Vanitas Exhibition, Bernheimer Contemporary. München, Septenber 2014:
        </h3>
        <ul>
          <li>
            <a href="https://www.muenchenarchitektur.com/beitrag/22099-vanitas">
              <p>München-Architektur Online Magazin - Sept. 2014</p>
            </a>
          </li>
          <li>
            <Link href="/articles/ArtInvestor_12_14.pdf">
              <a>
                <p>Art Investor Magazin - Sept. 2014</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/press/Neustart-mit-Tradition_Abendzeitung_12.09.2014">
              <a>
                <p>Münchner Abendzeitung - Sept. 2014</p>
              </a>
            </Link>
          </li>
          <li>
            <a href="https://www.faz.net/aktuell/feuilleton/kunst-und-architektur/open-art-2014-zieht-die-art-basel-nach-muenchen-13150324-p2.html">
              <p>Frankfurter Allgemeine Zeitung - 12, Sept. 2014</p>
            </a>
          </li>
          <li>
            <a href="https://www.welt.de/print/die_welt/kultur/article132206370/Muenchner-Materialismus.html">
              <p>Die Welt - 13, Sept. 2014</p>
            </a>
          </li>
          <li>
            <a href="https://www.handelsblatt.com/arts_und_style/kunstmarkt/galerienrundgang-muenchen-kreative-demonstranten/10704832-all.html">
              <p>Handelsblatt - 15, Sept. 2014</p>
            </a>
          </li>
          <li>
            <a href="https://www.mucbook.de/knochen-gold-und-ein-brot-aus-beton/">
              <p>MUCBOOK - 15, Sept. 2014</p>
            </a>
          </li>
          <li>
            <a href="https://www.tabularasamagazin.de/vanitas-contemporary-art-in-der-galerie-bernheimer/">
              <p>
                tabularasa - Zeitung für Gesellschaft & Kultur - 24, Sept. 2014
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.exklusiv-muenchen.de/news/isabel-bernheimer-interview-29173">
              <p>Exklusiv München - 13, Dec. 2014</p>
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>
          WHO CARES Exhibition, Bernheimer Contemporary. Berlin, July 2015:
        </h3>
        <ul>
          <li>
            <a href="https://www.gallerytalk.net/die-metamorphose-des-victor-alaluf/">
              <p>gallerytalk.net - 26, Nov. 2015</p>
            </a>
          </li>
          <li>
            <a href="https://www.exberliner.com/whats-on/art/who-cares-exhibition/">
              <p>EXBERLINER - July, 2015</p>
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Jüdisches Museum Berlin</h3>
        <ul>
          <li>
            <a href="https://www.handelszeitung.ch/panorama/kunstautomat-auf-knopfdruck-kunst">
              <p>BILANZ - 20, August, 2014</p>
            </a>
          </li>
          <li>
            <a href="https://www.jmberlin.de/blog/2015/03/barfuss-im-dunkeln/">
              <p>Barfus im Dunkeln - 1, March, 2015</p>
            </a>
          </li>
        </ul>
      </section>
      <h1 className={styles.header}>English</h1>
      <section className={styles.section}>
        <h3>
          Vanitas Exhibition, Bernheimer Contemporary. München, Septenber 2014:
        </h3>
        <ul>
          <li>
            <a href="https://watchfineartslondon.wordpress.com/2014/09/14/berlinese-still-lifes-in-munich/#more-1815">
              <p>Watch Fine Arts London - 14, Sept. 2014</p>
            </a>
          </li>
          <li>
            <a href="http://www.fluctibus.com/central/2014/09/11/vanitas/">
              <p>the fluctibus magazine - 11, Sept. 2014</p>
            </a>
          </li>
          <li>
            <Link href="/press/ARTNEWS-article">
              <a>
                <p>The Art Newspaper - Nov. 2014</p>
              </a>
            </Link>
          </li>
          <li>
            <a href="https://www.jmberlin.de/blog-en/2015/03/barefoot-in-the-dark/">
              <p>Barefoot in the Dark - 1, March, 2015</p>
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>
          WHO CARES Exhibition, Bernheimer Contemporary. Berlin, July 2015:
        </h3>
        <ul>
          <li>
            <a href="https://mystylery.com/en/blog/2015/07/23/isabel-bernheimers-exhibition-who-cares/">
              <p>My Mistery - 23, July, 2015</p>
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>
          THE TASTE OF ADICTION, Bernheimer Contemporary. Berlin, July 2015:
        </h3>
        <ul>
          <li>
            <a href="http://lodownmagazine.com/pulse/taste-addiction">
              <p>London Magazine - 3, Nov. 2015</p>
            </a>
          </li>
        </ul>
      </section>
      <h1 className={styles.header}>Spanish</h1>
      <section className={styles.section}>
        <h3>
          Descalso en la Pscuridad - Museo Juan Yaparí, Posadas, Misiones,
          Aegentina
        </h3>
        <ul>
          <li>
            <a href="https://cdn.elterritorio.com.ar/notaimpresa.aspx?c=7919885976373638">
              <p>El Territorio - 10, March 2013</p>
            </a>
          </li>
          <li>
            <a href="https://cdn.elterritorio.com.ar/notaimpresa.aspx?c=1107315940974202">
              <p>El Territorio - 16, March 2013</p>
            </a>
          </li>
          <li>
            <a href="https://www.primeraedicion.com.ar/nota/105216/mi-muestra-habla-de-esa-oscuridad-en-la-que-nos-podemos-encontrar/">
              <p>Primera Edicíon - 14, March 2013</p>
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Other</h3>
        <ul>
          <li>
            <a href="https://cdn.elterritorio.com.ar/notaimpresa.aspx?c=5040768954416006">
              <p>El Territorio - 7, March 2012</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Press;
