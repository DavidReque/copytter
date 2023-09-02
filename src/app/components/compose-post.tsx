'use client'

import ComposePostButton from './compose-post-button'
import { addPost } from '../actions/add-post-actions'
import { useRef } from 'react'

export default function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-4 border-b border-white/20'>
        <img src={userAvatarUrl} className='rounded-full w-10 h-10 object-contain mr-4'/>
        <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
        name="content"
        rows={4}
        className='w-full text-2xl bg-black placeholder-gray-500 p-2'
        placeholder='Qué esta pasando?'>
        </textarea>
        <ComposePostButton/>
        </div>
    </form>
  )
}
