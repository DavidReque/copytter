'use client'

import { useEffect, useRef } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function ComposePostTextarea () {
  const { pending } = useFormStatus()
  const sentSubmit = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current === null) return

    if (!pending && sentSubmit.current) {
      sentSubmit.current = false
      textAreaRef.current.value = ''

      return
    }

    sentSubmit.current = pending
  }, [pending])
  return (
    <div>
        <textarea
        ref={textAreaRef}
        name="content"
        rows={4}
        className='w-full text-2xl bg-black placeholder-gray-500 p-2'
        placeholder='Qué esta pasando?'>
        </textarea>
    </div>
  )
}
