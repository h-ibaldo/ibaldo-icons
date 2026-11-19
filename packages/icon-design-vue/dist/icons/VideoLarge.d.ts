import type { DefineComponent } from 'vue';

export interface VideoLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoLarge: DefineComponent<VideoLargeProps>;

export default VideoLarge;
export { VideoLarge };
