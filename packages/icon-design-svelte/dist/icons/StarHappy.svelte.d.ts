import { SvelteComponent } from 'svelte';

export interface StarHappyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarHappy extends SvelteComponent<StarHappyProps> {}
