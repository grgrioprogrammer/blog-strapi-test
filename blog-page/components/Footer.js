import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.flexFooter}`}>
                <Link href="/">
                        <Image src="/logo.svg" width={170} height={60} alt="logo"/>
                </Link>         
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>              
            </div> 
        </footer>
    )
}

module.exports = Footer;