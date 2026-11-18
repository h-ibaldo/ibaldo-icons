import { SvelteComponent } from 'svelte';

export interface CircleSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleSplit extends SvelteComponent<CircleSplitProps> {}
