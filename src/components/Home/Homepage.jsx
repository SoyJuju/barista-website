import '../../styles/main.css';

import background from '../../assets/main_images/main_background.jpg';

export default function Homepage() {
  return (
    <section
      className="homepage"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="homepage--container | container">
        <div className="homepage--content">
          <p className="homepage--heading | text-neutral-100">Coffee Recipes</p>
          <p className="homepage--subheading | fs-small-500 text-neutral-100">
            Make every drink with satisfaction
          </p>
          <form
            target="_blank"
            action="https://www.facebook.com/baristachawsu/"
          >
            <button className="homepage--social">Learn More</button>
          </form>
        </div>
      </div>
    </section>
  );
}
