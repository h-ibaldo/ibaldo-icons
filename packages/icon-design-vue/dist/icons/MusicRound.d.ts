import type { DefineComponent } from 'vue';

export interface MusicRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicRound: DefineComponent<MusicRoundProps>;

export default MusicRound;
export { MusicRound };
