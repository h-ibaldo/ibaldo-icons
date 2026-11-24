import { SvelteComponent } from 'svelte';

export interface BellClockKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellClockKnob extends SvelteComponent<BellClockKnobProps> {}
