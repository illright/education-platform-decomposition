import { type LessonBlock } from "~shared/api";
import { ImageViewer, VideoPlayer } from "~shared/ui";

export function CarouselBlock({ block }: { block: LessonBlock }) {
  return block.media.map((medium) => {
    switch (medium.mediaType) {
      case "image":
        return <ImageViewer src={medium.mediaUrl} />;
      case "video":
        return <VideoPlayer src={medium.mediaUrl} />;
    }
  });
}
