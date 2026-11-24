import { SvelteComponent } from 'svelte';

export interface StarXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarX extends SvelteComponent<StarXProps> {}
