import { SvelteComponent } from 'svelte';

export interface BurstDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BurstDotted extends SvelteComponent<BurstDottedProps> {}
