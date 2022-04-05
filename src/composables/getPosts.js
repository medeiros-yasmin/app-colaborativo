import ref from 'vue'
import projectFirestore from '../firebase/firebase-config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('textos').get()

      posts.value = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      console.log('Chegou')
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts
