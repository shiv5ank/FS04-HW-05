function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid"  style={{backgroundColor:"red"}}>
          <a class="navbar-brand" href="#" style={{color:'white'}}>
            Koding Made Simple
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{color:'white'}}>
                  Bootsrap
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color:'white'}}>
                  Themes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color:'white'}}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
