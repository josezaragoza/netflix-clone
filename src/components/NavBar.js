const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <div className="logo"></div>
        </li>
        <li className="link home">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="/">TV Shows</a>
        </li>
        <li className="link">
          <a href="/">Movies</a>
        </li>
      </ul>
      <div className="nav-right">
        <i class="fi fi-br-search"></i>
        <i class="fi fi-rs-bell"></i>
      </div>
    </div>
  );
}

export default NavBar
