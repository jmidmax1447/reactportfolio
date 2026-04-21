import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Your Name</p>
        <div className="footer__links">
          <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:you@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;