import Head from "next/head";
import head from "next/head"
import Header from './Header'

// aqui voy a crear el header y el footer

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Blog - Home</title>
            </Head>
            <Header />
            { children }
        </div>
    )
}

export default Layout;