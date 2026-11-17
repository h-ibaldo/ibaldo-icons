import { SvelteComponent } from 'svelte';

export interface StarStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarStriped extends SvelteComponent<StarStripedProps> {}
