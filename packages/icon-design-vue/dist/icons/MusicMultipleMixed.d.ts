import type { DefineComponent } from 'vue';

export interface MusicMultipleMixedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicMultipleMixed: DefineComponent<MusicMultipleMixedProps>;

export default MusicMultipleMixed;
export { MusicMultipleMixed };
