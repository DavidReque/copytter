import React from 'react'
import PostCard from './post-card'

export default function PostList ({ posts }) {
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
