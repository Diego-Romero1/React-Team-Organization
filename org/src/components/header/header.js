import './header.css'

function Header () {
    return  <header className="header">
        <img src={process.env.PUBLIC_URL + '/img/header-image.png'} alt="banner" />
    </header>
   
}

export default Header