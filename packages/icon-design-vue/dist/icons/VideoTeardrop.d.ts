import type { DefineComponent } from 'vue';

export interface VideoTeardropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoTeardrop: DefineComponent<VideoTeardropProps>;

export default VideoTeardrop;
export { VideoTeardrop };
