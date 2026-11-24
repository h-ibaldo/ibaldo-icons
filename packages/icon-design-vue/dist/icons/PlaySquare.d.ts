import type { DefineComponent } from 'vue';

export interface PlaySquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlaySquare: DefineComponent<PlaySquareProps>;

export default PlaySquare;
export { PlaySquare };
