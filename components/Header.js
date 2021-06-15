import headerStyles from '../styles/Header.module.css';


const Header = () => {
    return (
        <div>
            <h1 className= {headerStyles.title}>
                <span>WebDev </span> 
            Noticias
            </h1>
            <p className={headerStyles.description}>Mantengase al día con las últimas noticas de desarrollo web</p>
        </div>
    )
}

export default Header
