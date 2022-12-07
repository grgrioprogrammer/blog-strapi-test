import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import CardPost from '../components/CardPost'

export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
        <Layout namePage='Home' titleHero='Eureka Labs'>
            <div className='container'>
              <div className={styles.contentCard}>
                {
                  posts.map(item => (
                    <CardPost 
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        content={item.content}
                        image={item.image[0].formats.small.url}
                        date={item.createdAt}
                    />
                  ))
                }
              </div>
            </div>
        </Layout>
    </div>
  )
}

// esta funcion me trae la data desde strapi, lo configure para que los blogs tengan un metodo get al que puedo llamar
// obtengo la respuesta, lo parseo a json y la muestro.
// esta funcion de next solo se ejecutara en el servidor (strapi), no en el frontend.

export async function getServerSideProps () {
  const url = 'http://localhost:1337/blogs';
  const response = await fetch(url);
  const responseJson = await response.json();
  // console.log(responseJson);
  return {
    props: {
      posts: responseJson,
    }
  }
}