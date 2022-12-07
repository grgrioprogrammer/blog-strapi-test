import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CardPost.module.css'

const CardPost = ({title, description, id, image, date}) => {

    return (
        <article className={styles.cardPost}>
            <Image 
                src={`http://localhost:1337${image}`}
                width={400} 
                height={200} 
                alt={image}/> 

            <div>
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{description}</p>
            </div>
        </article>

    )
}
export default CardPost;