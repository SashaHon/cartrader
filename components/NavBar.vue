<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const handleLogOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  navigateTo('/');
  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <button @click="handleLogOut">Log out</button>
    </div>
    <NuxtLink v-else to="/login">Log In</NuxtLink>
  </header>
</template>
