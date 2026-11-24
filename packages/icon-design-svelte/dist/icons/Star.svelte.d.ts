import { SvelteComponent } from 'svelte';

export interface StarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Star extends SvelteComponent<StarProps> {}
