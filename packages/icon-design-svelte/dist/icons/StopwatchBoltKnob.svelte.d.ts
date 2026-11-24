import { SvelteComponent } from 'svelte';

export interface StopwatchBoltKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchBoltKnob extends SvelteComponent<StopwatchBoltKnobProps> {}
