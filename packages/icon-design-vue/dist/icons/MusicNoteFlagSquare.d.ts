import type { DefineComponent } from 'vue';

export interface MusicNoteFlagSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNoteFlagSquare: DefineComponent<MusicNoteFlagSquareProps>;

export default MusicNoteFlagSquare;
export { MusicNoteFlagSquare };
