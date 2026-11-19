import type { DefineComponent } from 'vue';

export interface VideoOffJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoOffJoined: DefineComponent<VideoOffJoinedProps>;

export default VideoOffJoined;
export { VideoOffJoined };
