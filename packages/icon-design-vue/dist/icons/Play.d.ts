import type { DefineComponent } from 'vue';

export interface PlayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Play: DefineComponent<PlayProps>;

export default Play;
export { Play };
