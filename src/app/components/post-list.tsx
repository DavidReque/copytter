import PostCard from './post-card'
import { type Post } from '../types/posts'

export default function PostList ({ posts }: { posts: Post[] | null }) {
  return (
    <div>
        {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
            key={id}
            userFullName={userFullName}
            userName={userName}
            avatarUrl={avatarUrl}
            content={content}
 />
          )
        })
      }
    </div>
  )
}
