import "./index.css";

export default function Header() {
  return (
    <div className="header-el">
      <div className="inner-header-text-el">
        <h1>
          <span>GLOW</span> up
          <br></br>Your Profile
        </h1>
        <p>
          Spending considerable time crafting your online personal brand won't
          yield significant results unless there's a unifying focal point to
          guide your incoming traffic.
        </p>
        <p>
          Whether you desire a website makeover or a brand-new site, our skilled
          team of web designers and copywriters will oversee the entire process.
          This way, your website will exude a premium quality that matches the
          excellence of your social media content.
        </p>
        <button className="header-el-btn">CTA</button>
      </div>
      <div className="inner-header-image-el">
        <img
          className="james-hero-img"
          src="/public/placeholder-3.png"
          alt="james alderman"
        />
      </div>
    </div>
  );
}
