import tinytime from 'tinytime'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'

const MAX_DISPLAY = 5
const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <h1>Thai tran</h1>
      <h2>ball is life</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus officia nihil,
        consectetur reprehenderit ut nulla inventore ratione consequatur sequi dolore. Culpa ut
        doloremque eligendi laboriosam temporibus eum, enim praesentium aliquid? Iusto quae tempora
        iste vitae, suscipit sint amet voluptas aut. Numquam sed eligendi nihil sequi assumenda?
        Neque, odit magnam?
      </p>
    </>
  )
}
