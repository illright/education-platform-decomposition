import { fetchFromApi } from '~shared/api';

export function useLesson(id: string) {
  return useQuery(["lessons", id], () => fetchFromApi(`/api/v1/lessons/${id}`));
}
