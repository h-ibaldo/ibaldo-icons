import { SvelteComponent } from 'svelte';

export interface MusicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music extends SvelteComponent<MusicProps> {}
