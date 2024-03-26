<script setup lang="ts">
definePageMeta({
  layout: 'custom',
});
const supabase = useSupabaseClient();
// const user = useSupabaseUser();

const handleLogIn = async (): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="mt-20 text-center">
    <h1 class="text-5xl font-bold mb-7">Log in</h1>
    <button
      class="bg-red-400 p-3 rounded text-white font-bold"
      @click="handleLogIn"
    >
      Log in with Google
    </button>
  </div>
</template>
