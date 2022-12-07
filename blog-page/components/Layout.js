import Head from "next/head";
import Header from '../components/Header'
import Footer from '../components/Footer'

// aqui voy a crear el header y el footer

const Layout = ({ children, namePage, titleHero }) => {
    return (
        <div>
            <Head>
                <title>Blog - {namePage}</title>
            </Head>
            <Header titleHero={titleHero}/>
            { children }
            <Footer/>
        </div>
    )
}

export default Layout;