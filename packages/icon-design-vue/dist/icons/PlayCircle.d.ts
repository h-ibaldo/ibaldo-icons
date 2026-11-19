import type { DefineComponent } from 'vue';

export interface PlayCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlayCircle: DefineComponent<PlayCircleProps>;

export default PlayCircle;
export { PlayCircle };
