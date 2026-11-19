import type { DefineComponent } from 'vue';

export interface VideoSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoSquare: DefineComponent<VideoSquareProps>;

export default VideoSquare;
export { VideoSquare };
