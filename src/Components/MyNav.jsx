import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
const MyNav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="www.google.com">
          <img src={logo} alt="netflix_logo" width="100px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="www.google.com"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="www.google.com">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="www.google.com">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="www.google.com">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="www.google.com">
                My List
              </a>
            </li>
          </ul>
          <button
            className="bg-transparent text-light border border-dark me-2"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={21}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <button className="bg-transparent text-light border border-dark me-2">
            KIDS
          </button>
          <button className="bg-transparent text-light border border-dark me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </button>
          <button className="bg-transparent text-light border border-dark me-3">
            <a className="text-light" href="profile.html">
              <img src={avatar} alt="immagine-avatar" width={34} height={35} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={12}
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
