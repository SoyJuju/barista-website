import '../../styles/main.css';

import background from '../../assets/main_images/main_background.png';

export default function Homepage() {
  return (
    <section
      class="homepage"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div class="homepage--container | container">
        <div className="homepage--content">
          <p class="homepage--heading | text-neutral-100">Coffee Recipes</p>
          <p class="homepage--subheading | fs-small-500 text-neutral-100">
            Make every drink with satisfaction
          </p>
          <form
            target="_blank"
            action="https://www.facebook.com/baristachawsu/"
          >
            <button class="homepage--social">Learn More</button>
          </form>
        </div>
      </div>
    </section>
  );
}
