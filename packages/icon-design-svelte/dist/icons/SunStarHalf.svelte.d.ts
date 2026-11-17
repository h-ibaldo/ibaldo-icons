import { SvelteComponent } from 'svelte';

export interface SunStarHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunStarHalf extends SvelteComponent<SunStarHalfProps> {}
