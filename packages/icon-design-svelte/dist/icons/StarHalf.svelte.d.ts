import { SvelteComponent } from 'svelte';

export interface StarHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarHalf extends SvelteComponent<StarHalfProps> {}
