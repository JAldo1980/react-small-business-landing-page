import "./index.css";

export default function Services() {
  return (
    <div className="service-el">
      <div className="inner-service-grid">
        <div className="service-card linkedIn-card">
          <h2>LinkedIn</h2>
          <p>
            Elevate Your LinkedIn Presence, redefining your LinkedIn profile for
            success.
          </p>
          <ul>
            <li>
              Transformative Profile Picture: Say goodbye to dull photos with a
              fresh, engaging image that captures attention.
            </li>
            <li>
              Custom Banner Design: Make a stunning first impression with a
              personalized banner that speaks to your unique brand.
            </li>
            <li>
              Tailored Bio: Craft a compelling and strategic bio that highlights
              your strengths and goals.
            </li>
            <li>
              Keyword Optimization: Boost your profile's visibility with
              strategically placed keywords that resonate with your audience.
            </li>
            <li>
              Revamped "About" Section: Tell your story in a captivating way
              that draws in connections and prospects.
            </li>
            <li>
              Featured Post Graphics: Showcase your top content with
              eye-catching graphics that make your profile shine.
            </li>
          </ul>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex in sit
            vel sed voluptatum nesciunt quod quidem, excepturi iste eius.
          </p>
          <button className="btn">LinkedIn</button>
        </div>
        <div className="service-card website-card">
          <h2>Websites</h2>
          <p>
            Elevate Your Online Presence with a Single Page Professional
            Website. Building a captivating personal brand online is a must, but
            it's equally vital to have a central hub for all your incoming
            traffic.
          </p>
          <ul>
            <li>Innovative Concept Creation</li>
            <li>Sleek Single-Page Design and Branding</li>
            <li>Striking Imagery</li>
            <li>Compelling Copywriting</li>
            <li>Reliable Hosting (Priced at £200/year)</li>
          </ul>
          <p>
            Don't let your online presence lack a cohesive anchor point.
            Maximise your personal brand with a single page professional website
            that complements your social media presence, guiding your new
            traffic to success.
          </p>
          <button className="btn">Websites</button>
        </div>
      </div>
    </div>
  );
}
