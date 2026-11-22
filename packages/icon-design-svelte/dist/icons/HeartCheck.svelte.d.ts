import { SvelteComponent } from 'svelte';

export interface HeartCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartCheck extends SvelteComponent<HeartCheckProps> {}
