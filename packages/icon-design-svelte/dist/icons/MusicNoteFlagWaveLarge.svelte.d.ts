import { SvelteComponent } from 'svelte';

export interface MusicNoteFlagWaveLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicNoteFlagWaveLarge extends SvelteComponent<MusicNoteFlagWaveLargeProps> {}
