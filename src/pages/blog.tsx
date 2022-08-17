import Link from 'next/link'
import Header from '../components/header'
import { getAllPosts } from '../utils/md-stuff'
import { Posts } from '../utils/types'

const BlogPosts: React.FC<Posts> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className='py-10' />
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href='/[slug]' as={`/${post.slug}`}>
            <a className='text-blue-500 mt-4 mb-2 block'>Read more</a>
          </Link>
          <h1>{post.data.title}</h1>
          <p>{post.data.description}</p>
        </div>
      ))}
    </>
  )
}

export default BlogPosts

export const getStaticProps = () => {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
