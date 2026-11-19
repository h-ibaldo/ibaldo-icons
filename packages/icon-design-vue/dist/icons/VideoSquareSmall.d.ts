import type { DefineComponent } from 'vue';

export interface VideoSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoSquareSmall: DefineComponent<VideoSquareSmallProps>;

export default VideoSquareSmall;
export { VideoSquareSmall };
