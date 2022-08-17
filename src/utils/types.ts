export type PostData = {
  slug: string
  data: {
    title: string
    date: string
    description: string
  }
}

export type Posts = {
  posts: PostData[]
}
