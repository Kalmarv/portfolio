import Link from 'next/link'
import Header from '../components/header'
import { getAllPosts } from '../utils/md-stuff'
import { Posts } from '../utils/types'

const BlogPosts: React.FC<Posts> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className='py-16' />
      <div className='flex justify-center'>
        <div className='flex flex-col mx-8'>
          <h1 className='font-bold text-4xl'>Couple random things I&apos;ve written</h1>
          <div className='py-4' />
          {posts.map((post) => (
            <div key={post.slug} className='py-4'>
              <h1 className='font-bold text-2xl'>{post.data.title}</h1>
              <p>{post.data.description}</p>
              <Link href='/[slug]' as={`/${post.slug}`}>
                <a className='font-bold underline'>Read more</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
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
