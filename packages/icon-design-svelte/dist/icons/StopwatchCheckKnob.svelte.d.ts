import { SvelteComponent } from 'svelte';

export interface StopwatchCheckKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchCheckKnob extends SvelteComponent<StopwatchCheckKnobProps> {}
