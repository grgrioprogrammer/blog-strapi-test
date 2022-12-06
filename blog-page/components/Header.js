import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <Image src="/logo.svg" width={170} height={60} alt="logo"/>
            </div>
        </header>
    )
}

export default Header;