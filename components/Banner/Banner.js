import styles from './Banner.module.scss';



export default function Banner({data}){
    const {name,type,description}=data
    return(
        <>
            <div className={styles.bannerContainer} style={{backgroundImage:`url(${data["imageUrl"]})`}}>
                <div className={styles.bannerbody}>
                <h1>{name}</h1>
                <h2>{type}</h2>
                <p>{description}</p>   
                </div>
                
            </div>
            
        </>
    )
}