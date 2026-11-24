import type { DefineComponent } from 'vue';

export interface VideoCircleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoCircleSmall: DefineComponent<VideoCircleSmallProps>;

export default VideoCircleSmall;
export { VideoCircleSmall };
