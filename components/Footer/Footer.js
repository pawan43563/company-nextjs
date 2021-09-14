import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faFacebook, faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=false;
export default function Footer({data,style,imagestyle}){
    return(
        <>
            <div className={styles.footer} style={style}>
                <img src={data["logo"]} style={imagestyle} alt="Company's logo" />
                <div className={styles.socialLinks}>
                    <FontAwesomeIcon icon={faFacebook}  />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className={styles.copyright}>
                    <p>{data["copyrightInfo"]}</p>
                </div>
            </div>
            
        </>
    )
}