import "./index.css";

export default function Footer() {
  return (
    <div className="footer-el">
      <div className="col-1">
        <h2 className="glow-h2">GLOW</h2>
        <p>James Alderman | 2023</p>
      </div>
      <div className="col-2">
        <h4>Useful links</h4>

        <p>
          Our Blog: <a href="#">Read</a>
        </p>
        <p>
          <a href="#">Meet the Team</a>
        </p>
        <p>
          <a href="#">Careers</a>
        </p>
      </div>
      <div className="col-3">
        <h4>Useful links</h4>

        <p>Email: james@glow.com</p>
        <p>Phone: 080889878761</p>
        <p>
          Follow James here{" "}
          <a href="https://www.linkedin.com/in/jamespalderman/">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
