import { SvelteComponent } from 'svelte';

export interface ClockDottedArcAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDottedArcAngled extends SvelteComponent<ClockDottedArcAngledProps> {}
