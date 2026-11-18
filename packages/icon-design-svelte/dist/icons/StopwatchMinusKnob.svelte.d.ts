import { SvelteComponent } from 'svelte';

export interface StopwatchMinusKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchMinusKnob extends SvelteComponent<StopwatchMinusKnobProps> {}
