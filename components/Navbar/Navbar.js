import Link from 'next/link'
import styles from './Navbar.module.scss'




export default function Navbar({data,style,imagestyle}){
    return(
        <>
            <div className={styles.navbarContainer} style={style}>
                <img src={data["logo"]} style={imagestyle} />
                <ul>
                    {
                        data["navLinks"].map((e,i)=>(
                            <li key={i}>
                                <Link href={e.link} >
                                    {e.name}
                                </Link>
                            </li>
                            
                        ))
                    }
                </ul>
                <div className={styles.menu}>
                    <img src="https://pawan43563.github.io/Images/menu-white.png" />
                </div>
            </div>
        </>
    )
}