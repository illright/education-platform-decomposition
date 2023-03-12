import { type LessonBlock } from "~shared/api";
import { ImageViewer, VideoPlayer } from "~shared/ui";

export function MediaBlock({ block }: { block: LessonBlock }) {
  switch (block.mediaType) {
    case "image":
      return <ImageViewer src={block.mediaUrl} />;
    case "video":
      return <VideoPlayer src={block.mediaUrl} />;
  }
}
