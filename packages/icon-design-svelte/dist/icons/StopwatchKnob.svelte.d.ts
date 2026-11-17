import { SvelteComponent } from 'svelte';

export interface StopwatchKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchKnob extends SvelteComponent<StopwatchKnobProps> {}
