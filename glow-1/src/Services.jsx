import "./index.css";

export default function Services() {
  // the below function will allow for smooth scroll to the specific service (look at onClicks attached to the buttons below)
  function handleScrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="service-el">
      <div className="inner-service-grid">
        <div id="linkedin-scroll" className="service-card linkedIn-card">
          <h2>LinkedIn</h2>
          <p>
            Elevate Your LinkedIn Presence, redefining your LinkedIn profile for
            success.
          </p>
          <ul>
            <li>
              <span className="service-text-style">
                Transformative Profile Picture:
              </span>{" "}
              Say goodbye to dull photos with a fresh, engaging image that
              captures attention.
            </li>
            <li>
              <span className="service-text-style">Custom Banner Design:</span>{" "}
              Make a stunning first impression with a personalized banner that
              speaks to your unique brand.
            </li>
            <li>
              <span className="service-text-style">Tailored Bio:</span> Craft a
              compelling and strategic bio that highlights your strengths and
              goals.
            </li>
            <li>
              <span className="service-text-style">Keyword Optimization:</span>{" "}
              Boost your profile's visibility with strategically placed keywords
              that resonate with your audience.
            </li>
            <li>
              <span className="service-text-style">
                Revamped "About" Section:
              </span>{" "}
              Tell your story in a captivating way that draws in connections and
              prospects.
            </li>
            <li>
              <span className="service-text-style">
                Featured Post Graphics:
              </span>{" "}
              Showcase your top content with eye-catching graphics that make
              your profile shine.
            </li>
          </ul>

          <button
            className="btn"
            onClick={() => handleScrollToSection("linkedin-price-scroll")}
          >
            Explore Packages
          </button>
        </div>
        <div id="website-scroll" className="service-card website-card">
          <h2>Websites</h2>
          <p>
            Elevate Your Online Presence with a Single Page Professional
            Website. Building a captivating personal brand online is a must, but
            it's equally vital to have a central hub for all your incoming
            traffic.
          </p>
          <ul>
            <li>
              <span className="service-text-style">
                Innovative Concept Creation
              </span>
            </li>
            <li>
              <span className="service-text-style">
                Sleek Single-Page Design and Branding
              </span>
            </li>
            <li>
              <span className="service-text-style">Striking Imagery</span>
            </li>
            <li>
              <span className="service-text-style">Compelling Copywriting</span>
            </li>
            <li>
              <span className="service-text-style">
                Reliable Hosting (Priced at £200/year)
              </span>
            </li>
          </ul>
          <p>
            Don't let your online presence lack a cohesive anchor point.
            Maximise your personal brand with a single page professional website
            that complements your social media presence, guiding your new
            traffic to success.
          </p>
          <button
            className="btn"
            onClick={() => handleScrollToSection("web-price-scroll")}
          >
            Explore Packages
          </button>
        </div>
      </div>
    </div>
  );
}
