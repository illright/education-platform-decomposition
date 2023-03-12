import { TextBlock } from '~widgets/text-block';
import { BlockType, type LessonBlock } from '~shared/api';

export function renderBlock(block: LessonBlock) {
  switch (block.type) {
    case BlockType.Text:
      return <TextBlock block={block} />
    // ...
  }
}
