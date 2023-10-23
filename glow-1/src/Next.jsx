import "./index.css";

export default function Next(props) {
  return (
    <div className="next-steps-el">
      <div className="inner-next-steps-grid">
        <div className="next-step-card">
          <h2>{props.number}</h2>
          <h3>{props.headline}</h3>
          <p>{props.text}</p>
          <div className="next-html">{props.html}</div>
        </div>
      </div>
    </div>
  );
}
