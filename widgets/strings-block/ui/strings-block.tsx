import { useSubmitAnswer } from '~features/submit-answer';
import { type LessonBlock } from '~shared/api';

import { StringPoint } from './string-point';

export function StringsBlock({ block }: { block: LessonBlock }) {
  const { submit, correctAnswer } = useSubmitAnswer(block.id);
  const { currentAnswer, handlePointClick } = useStringDrag();

  return <>
    <div>{block.left.map(leftPoint => <StringPoint side="left" onClick={handlePointClick}>{leftPoint}</StringPoint>)}</div>
    <div>{block.right.map(rightPoint => <StringPoint side="right" onClick={handlePointClick}>{rightPoint}</StringPoint>)}</div>
    <SubmitButton onClick={() => submit(currentAnswer)} />
  </>;
}
