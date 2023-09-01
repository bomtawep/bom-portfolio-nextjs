import { Suspense } from 'react'
import PostList from '../blog/PostList'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading PostList...</p>}>
        <PostList />
      </Suspense>
    </section>
  )
}