import type { DefineComponent } from 'vue';

export interface MusicNoteFlagRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNoteFlagRound: DefineComponent<MusicNoteFlagRoundProps>;

export default MusicNoteFlagRound;
export { MusicNoteFlagRound };
