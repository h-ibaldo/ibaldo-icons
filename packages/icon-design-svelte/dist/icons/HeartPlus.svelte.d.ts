import { SvelteComponent } from 'svelte';

export interface HeartPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartPlus extends SvelteComponent<HeartPlusProps> {}
