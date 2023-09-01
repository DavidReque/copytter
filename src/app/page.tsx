import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AuthButtonServer from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostList from './components/post-list'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name, avatar_url)')

  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='min-w-[800px] mx-auto border-l border-r border-white/20 min-h-screen'>
        <AuthButtonServer/>
        <PostList posts={posts}/>
      </section>
    </main>
  )
}
