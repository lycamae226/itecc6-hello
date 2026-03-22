<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase'

const posts = ref([])

async function getPosts() {
  // Kinukuha nito ang data mula sa 'posts' table sa Supabase
  const { data } = await supabase.from('posts').select()
  posts.value = data
}

onMounted(() => {
  getPosts()
})
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif;">
    <h1>Aking Supabase Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
