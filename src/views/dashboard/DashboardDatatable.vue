<template>
  <v-card>
  </v-card>
</template>

<script>

import ref from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase/firebase-config'

export default {
  setup() {
    const publicacao = ref([])

    const colRef = collection(db, 'podcasts')

    getDocs(colRef).then(snapshot => {
      const docs = []
      snapshot.docs.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      publicacao.value = docs
    })
  },
}
</script>
