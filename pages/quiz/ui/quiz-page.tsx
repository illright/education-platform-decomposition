import { Header } from "~widgets/header";
import { useLessonId } from "../lib/use-lesson-id";
import { TableOfContents } from "./table-of-contents";
import { renderBlock } from "./render-block";

export function QuizPage() {
  const lessonId = useLessonId();
  const { data: lesson, loading } = useLesson(lessonId);

  return (
    <div className="tailwind-stuff">
      <Header />
      {loading ? (
        <>
          <TableOfContentsSkeleton />
          <main>
            <BlockSkeleton />
            <BlockSkeleton />
            <BlockSkeleton />
            <BlockSkeleton />
          </main>
        </>
      ) : (
        <>
          <TableOfContents headings={lesson.headings} />
          <main>{lesson.blocks.map(renderBlock)}</main>
        </>
      )}
    </div>
  );
}
