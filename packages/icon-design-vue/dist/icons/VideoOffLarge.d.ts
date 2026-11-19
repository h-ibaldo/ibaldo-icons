import type { DefineComponent } from 'vue';

export interface VideoOffLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoOffLarge: DefineComponent<VideoOffLargeProps>;

export default VideoOffLarge;
export { VideoOffLarge };
