export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.path.includes('profile')) return;

  const user = useSupabaseUser();
  if (user.value) {
    return;
  }
  return navigateTo('/login');
});
