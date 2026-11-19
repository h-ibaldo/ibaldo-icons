import type { DefineComponent } from 'vue';

export interface VideoSquareLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoSquareLarge: DefineComponent<VideoSquareLargeProps>;

export default VideoSquareLarge;
export { VideoSquareLarge };
