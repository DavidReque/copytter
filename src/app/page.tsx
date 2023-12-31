import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AuthButtonServer from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostList from './components/post-list'
import { type Database } from './types/database'
import ComposePost from './components/compose-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })

  const posts =
    data?.map(post => ({
      ...post,
      user: Array.isArray(post.user) ? post.user[0] : post.user
    })) ?? []

  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url}/>
        <PostList posts={posts}/>
      </section>
        <AuthButtonServer/>
    </main>
  )
}
