import type { DefineComponent } from 'vue';

export interface VideoReelsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoReels: DefineComponent<VideoReelsProps>;

export default VideoReels;
export { VideoReels };
