import { SvelteComponent } from 'svelte';

export interface HeartPositiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartPositive extends SvelteComponent<HeartPositiveProps> {}
