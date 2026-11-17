import { SvelteComponent } from 'svelte';

export interface SunStarStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarStriped extends SvelteComponent<SunStarStripedProps> {}
