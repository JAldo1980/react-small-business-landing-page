import "./index.css";

export default function WebPricing(props) {
  let badgeText;

  return (
    <div id="web-price-scroll" className="pricing-el">
      <div className="inner-pricing-grid">
        <div className="pricing-card">
          <h2 className="bronze-pricing">{props.headline}</h2>
          <h3>£ {props.price}</h3>
          <p>{props.text}</p>
          <div>{props.html}</div>
        </div>
      </div>
    </div>
  );
}
