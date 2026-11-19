import type { DefineComponent } from 'vue';

export interface VideoReelsLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoReelsLarge: DefineComponent<VideoReelsLargeProps>;

export default VideoReelsLarge;
export { VideoReelsLarge };
