import './navbar.scss'


const Navbar = () => {
    return (
        <section className='navbar'>
            <div className="logo">
                Plants
            </div>
            
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Plants</a>
                <a href="#">Gallery</a>
                <a href="#">Search</a>
            </div>

            <div className='icons'>
                <img src='./svg/bag.svg' alt='shopping icon' />
                <img src='./svg/account.svg' alt='user icon' />
            </div>
        </section>
    )
}

export default Navbar