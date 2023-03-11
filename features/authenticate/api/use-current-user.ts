export function useCurrentUser() {
  return useQuery('currentUser', () => { });
}
