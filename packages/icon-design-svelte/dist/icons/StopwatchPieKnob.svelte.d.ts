import { SvelteComponent } from 'svelte';

export interface StopwatchPieKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPieKnob extends SvelteComponent<StopwatchPieKnobProps> {}
