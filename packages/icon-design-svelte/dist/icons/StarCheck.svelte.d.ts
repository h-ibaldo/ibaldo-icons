import { SvelteComponent } from 'svelte';

export interface StarCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarCheck extends SvelteComponent<StarCheckProps> {}
