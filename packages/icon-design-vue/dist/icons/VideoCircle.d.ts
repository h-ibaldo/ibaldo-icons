import type { DefineComponent } from 'vue';

export interface VideoCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoCircle: DefineComponent<VideoCircleProps>;

export default VideoCircle;
export { VideoCircle };
