import styles from './Card.module.scss'


export default function Card({data}){
    let {name,bodylogo,type,description}=data
    let name_url=data["name"].toLowerCase().replace(/ /g,'')
    return(
        <a href={`/${name_url}`} className={styles.card}>
            <h2>{name} &rarr;</h2>
            <img src={bodylogo} />
            <div className={styles.info}>
                <h3>{type}</h3>
                <p>{description}</p>
            </div>
        </a>
    )
}