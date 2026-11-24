import type { DefineComponent } from 'vue';

export interface VideoCircleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoCircleLarge: DefineComponent<VideoCircleLargeProps>;

export default VideoCircleLarge;
export { VideoCircleLarge };
