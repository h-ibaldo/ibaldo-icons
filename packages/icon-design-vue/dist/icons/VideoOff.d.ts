import type { DefineComponent } from 'vue';

export interface VideoOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoOff: DefineComponent<VideoOffProps>;

export default VideoOff;
export { VideoOff };
