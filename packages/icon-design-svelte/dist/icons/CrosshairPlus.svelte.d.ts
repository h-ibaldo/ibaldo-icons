import { SvelteComponent } from 'svelte';

export interface CrosshairPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrosshairPlus extends SvelteComponent<CrosshairPlusProps> {}
