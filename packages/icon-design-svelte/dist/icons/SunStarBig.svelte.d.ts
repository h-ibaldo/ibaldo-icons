import { SvelteComponent } from 'svelte';

export interface SunStarBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarBig extends SvelteComponent<SunStarBigProps> {}
