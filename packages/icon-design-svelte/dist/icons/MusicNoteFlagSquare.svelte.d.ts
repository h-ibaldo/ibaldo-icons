import { SvelteComponent } from 'svelte';

export interface MusicNoteFlagSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicNoteFlagSquare extends SvelteComponent<MusicNoteFlagSquareProps> {}
