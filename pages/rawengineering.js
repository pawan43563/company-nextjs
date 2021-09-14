import Navbar from "../components/Navbar/Navbar";
import styles from '../styles/common.module.scss'
import Footer from '../components/Footer/Footer'
import Banner from "../components/Banner/Banner"
import Head from 'next/head'

let style1={
    backgroundColor:"black",
    color:"white"
}



export default function RawEngineering({data}){
    let {RE}=data
    return (
        <>
        <Head>
            <title>Raw Engineering</title>
            <meta name="description" content="Raw Engineering" />
            <link rel="icon" href="/raweng.png" />
        </Head>
        <div className={styles.container}>
            
            <Navbar data={RE}  style={style1} />
            <Banner data={RE} />
            <Footer data={RE["footerData"]} style={style1} />
        </div>
        </>
        
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