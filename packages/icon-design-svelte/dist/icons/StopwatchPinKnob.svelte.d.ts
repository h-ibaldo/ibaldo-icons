import { SvelteComponent } from 'svelte';

export interface StopwatchPinKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPinKnob extends SvelteComponent<StopwatchPinKnobProps> {}
