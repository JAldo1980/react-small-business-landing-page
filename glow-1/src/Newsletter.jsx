import "./index.css";

export default function Newsletter() {
  return (
    <div className="newsletter-el">
      <h2>Newsletter</h2>
      <p>Sign up to get the lastest GLOW news and developments.</p>
      <div className="input-el-holder">
        <input
          className="input-text"
          type="text"
          placeholder="Add your email address..."
        />
        <button className="input-btn">Subscribe</button>
      </div>
    </div>
  );
}
