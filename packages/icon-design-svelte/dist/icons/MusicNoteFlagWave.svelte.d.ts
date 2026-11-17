import { SvelteComponent } from 'svelte';

export interface MusicNoteFlagWaveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicNoteFlagWave extends SvelteComponent<MusicNoteFlagWaveProps> {}
