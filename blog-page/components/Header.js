import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={`container ${styles.menuLogo}`}>
                <Link href="/">
                        <Image src="/brand-eurekalabs.svg" width={270} height={80} alt="logo"/>
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div> 
            <div>
                <h2>Join Eureka!</h2>
            </div>
        </header>
    )
}

export default Header;