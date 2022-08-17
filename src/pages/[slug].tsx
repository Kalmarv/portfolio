import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostData } from '../utils/md-stuff'
import { PostData } from '../utils/types'

type PostWithContent = PostData & {
  mdxSource: MDXRemoteSerializeResult
}

const Post: React.FC<PostWithContent> = ({ data, mdxSource }) => {
  return (
    <div className='wrapper'>
      <h1>{data.title}</h1>
      <time>{data.date}</time>
      <MDXRemote {...mdxSource} lazy />
    </div>
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
