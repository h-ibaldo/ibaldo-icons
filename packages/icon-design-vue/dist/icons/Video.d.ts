import type { DefineComponent } from 'vue';

export interface VideoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Video: DefineComponent<VideoProps>;

export default Video;
export { Video };
