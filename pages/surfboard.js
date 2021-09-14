import styles from '../styles/common.module.scss';
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer'
import Banner from "../components/Banner/Banner"
import Head from 'next/head'

let style1={
    backgroundColor:"lightblue",
    color:"black"
}

let img={
    width:"180px",
    height:"100px"
}



export default function surfboard({data}){
    let {SB}=data
    return (
        <div className={styles.container}>
            <Head>
                <title>Surfboard</title>
                <meta name="description" content="Surfboard" />
                <link rel="icon" href="/sb.png" />
            </Head>
            <Navbar data={SB}  style={style1} imagestyle={img}/>
            <Banner data={SB} />
            <Footer data={SB["footerData"]} style={style1} imagestyle={img} />
        </div>
    )
}

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    let response = await fetch("https://pawan43563.github.io/json-files/company-data.json")
    let data=await response.json()
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
          data,
      }
    }
}