import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import Header from '../components/header'
import Code from '../components/highlight'
import { getAllPosts, getPostData } from '../utils/md-stuff'
import { PostData } from '../utils/types'

const BackIcon = () => {
  return (
    <Link href='/blog'>
      <div className='place-self-center hover:cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </Link>
  )
}

type PostWithContent = PostData & {
  mdxSource: MDXRemoteSerializeResult
}

const PostWrapper: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

const components = { Code }

const Post: React.FC<PostWithContent> = ({ data, mdxSource }) => {
  return (
    <PostWrapper>
      <div className='flex flex-col place-items-center'>
        <article className='prose prose-custom mx-4 sm:prose-lg'>
          <div className='py-10' />
          <div className='flex flex-row gap-4'>
            <BackIcon />
            <time>{data.date}</time>
          </div>
          <div className='p-1' />
          <MDXRemote {...mdxSource} components={components} lazy />
        </article>
      </div>
    </PostWrapper>
  )
}

export default Post

export const getStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: { slug: string; content: string } }) => {
  const post = getPostData(params.slug)
  const mdxSource = await serialize(post.content, { parseFrontmatter: true })
  return {
    props: {
      data: post.data,
      mdxSource: mdxSource,
    },
  }
}
