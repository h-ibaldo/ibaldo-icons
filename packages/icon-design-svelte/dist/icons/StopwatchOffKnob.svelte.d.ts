import { SvelteComponent } from 'svelte';

export interface StopwatchOffKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchOffKnob extends SvelteComponent<StopwatchOffKnobProps> {}
