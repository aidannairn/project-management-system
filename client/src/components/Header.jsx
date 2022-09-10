import logo from './assets/project-mgmt-logo-black.png'

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="Logo" className="mr-2" />
            <div>Project<b>MGMT</b></div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Header