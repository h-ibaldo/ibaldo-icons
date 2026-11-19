import type { DefineComponent } from 'vue';

export interface MusicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Music: DefineComponent<MusicProps>;

export default Music;
export { Music };
