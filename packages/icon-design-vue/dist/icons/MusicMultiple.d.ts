import type { DefineComponent } from 'vue';

export interface MusicMultipleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicMultiple: DefineComponent<MusicMultipleProps>;

export default MusicMultiple;
export { MusicMultiple };
