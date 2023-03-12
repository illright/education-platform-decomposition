import { RichText } from "~shared/ui";

import { useLessonId } from "../lib/use-lesson-id";

export interface TableOfContentsProps {
  headings: Array<{ text: string; sectionId: string }>;
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const lessonId = useLessonId();

  return (
    <nav>
      {headings.map(({ text, sectionId }) => (
        <NavLink to={`/lessons/${lessonId}/sections/${sectionId}`}>
          <RichText>{text}</RichText>
        </NavLink>
      ))}
    </nav>
  );
}
