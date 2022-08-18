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
        <div className='mx-8 flex flex-col'>
          <h1 className='text-4xl font-bold'>Random things I&apos;ve written</h1>
          <div className='py-4' />
          {posts.map((post) => (
            <div key={post.slug} className='py-4'>
              <h1 className='text-2xl font-bold'>{post.data.title}</h1>
              <p>{post.data.description}</p>
              <div className='py-2' />
              <div className='flex flex-row justify-between'>
                <Link href='/[slug]' as={`/${post.slug}`}>
                  <a className='text-xl font-bold underline'>Read more</a>
                </Link>
                <p>{post.data.date}</p>
              </div>
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
