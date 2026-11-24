import { SvelteComponent } from 'svelte';

export interface ClockDottedArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDottedArc extends SvelteComponent<ClockDottedArcProps> {}
