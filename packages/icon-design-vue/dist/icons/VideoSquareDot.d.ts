import type { DefineComponent } from 'vue';

export interface VideoSquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoSquareDot: DefineComponent<VideoSquareDotProps>;

export default VideoSquareDot;
export { VideoSquareDot };
