import type { DefineComponent } from 'vue';

export interface VideoJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoJoined: DefineComponent<VideoJoinedProps>;

export default VideoJoined;
export { VideoJoined };
