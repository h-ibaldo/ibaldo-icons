import { SvelteComponent } from 'svelte';

export interface ClockSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSplit extends SvelteComponent<ClockSplitProps> {}
