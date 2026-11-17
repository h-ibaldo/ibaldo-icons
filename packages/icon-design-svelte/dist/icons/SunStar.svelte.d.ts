import { SvelteComponent } from 'svelte';

export interface SunStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStar extends SvelteComponent<SunStarProps> {}
