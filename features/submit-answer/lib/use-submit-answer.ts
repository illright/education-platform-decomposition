import { fetchFromApi } from '~shared/api';

export function useSubmitAnswer(id: LessonBlock["id"]) {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const submit = useCallback((answer) {
    const response = useMutation(["answer", id], () => fetchFromApi({ path: `/answer/${id}`, method: "POST", body: { answer } }));
    setCorrectAnswer(response.data?.correct);
    return response;
  });

  return { submit, correctAnswer };
}
