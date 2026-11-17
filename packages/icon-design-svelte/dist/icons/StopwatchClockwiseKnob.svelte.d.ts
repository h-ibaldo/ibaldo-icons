import { SvelteComponent } from 'svelte';

export interface StopwatchClockwiseKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchClockwiseKnob extends SvelteComponent<StopwatchClockwiseKnobProps> {}
