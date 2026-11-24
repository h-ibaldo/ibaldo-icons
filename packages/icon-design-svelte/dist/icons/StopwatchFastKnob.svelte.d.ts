import { SvelteComponent } from 'svelte';

export interface StopwatchFastKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchFastKnob extends SvelteComponent<StopwatchFastKnobProps> {}
