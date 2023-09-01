import { type Database } from './database'

type PostType = Database['public']['Tables']['posts']['Row']
type UserType = Database['public']['Tables']['users']['Row']

export type Post = PostType & {
  user: UserType
}
