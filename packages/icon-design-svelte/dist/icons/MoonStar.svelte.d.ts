import { SvelteComponent } from 'svelte';

export interface MoonStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonStar extends SvelteComponent<MoonStarProps> {}
