import me from '../images/me.jpg';
import linkedin from '../images/linkedin.png';
import octocat from '../images/octocat.png';
import twitter from '../images/twitter.png';

export default function Index() {
  return (
    <>
      <main>
        <div className="intro">
          <div className="hello">Hello, I'm Damien Carcel.</div>
          <div className="about-me">I like to craft software.</div>
        </div>
        <div className="photo">
          <img alt="me.jpg" src={me} />
        </div>
      </main>
      <footer>
        <div className="copyright">© {new Date().getFullYear()} Damien Carcel</div>
        <div className="links">
          <a href="https://github.com/damien-carcel/">
            <img alt="GitHub" src={octocat} />
          </a>
          <a href="https://www.linkedin.com/in/damien-carcel/">
            <img alt="LinkedIn" src={linkedin} />
          </a>
          <a href="https://twitter.com/damiencarcel">
            <img alt="Twitter" src={twitter} />
          </a>
        </div>
      </footer>
    </>
  );
}
