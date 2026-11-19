import type { DefineComponent } from 'vue';

export interface MusicNoteFlagWaveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MusicNoteFlagWave: DefineComponent<MusicNoteFlagWaveProps>;

export default MusicNoteFlagWave;
export { MusicNoteFlagWave };
