import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <Image src="/logo.svg" width={170} height={60} alt="logo"/>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;