import { type LessonBlock } from '~shared/api';

export function TextBlock({ block }: { block: LessonBlock }) {
  return <div>{block.text}</div>;
}
