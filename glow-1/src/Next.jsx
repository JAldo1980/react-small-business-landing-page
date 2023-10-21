import "./index.css";

export default function Next(props) {
  return (
    <div className="next-steps-el">
      <div className="inner-next-steps-grid">
        <div className="next-step-card">
          <h2>{props.number}</h2>
          <h3>{props.headline}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}


`<div>
    <ul>
      <li>
        <span>Profile Critique:</span> A comprehensive review of your existing
        LinkedIn profile with actionable feedback.
      </li>
      <li>
        <span>Keyword Optimization:</span> Strategic placement of relevant
        keywords to improve your profile's visibility.
      </li>
      <li>
        <span>Headline Enhancement:</span> Crafting an attention-grabbing headline
        to make a strong first impression.
      </li>
      <li>
        <span>Custom URL Creation:</span> Personalized LinkedIn URL for a
        professional touch.
      </li>
      <li>
        <span>Networking Tips:</span> Recommendations for expanding your
        professional network.
      </li>
      <li>
        <span>30-Minute Consultation:</span> A brief consultation session to
        discuss your profile improvements.
      </li>
    </ul>
  </div>`