import { SvelteComponent } from 'svelte';

export interface HeartPlusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartPlusCenter extends SvelteComponent<HeartPlusCenterProps> {}
