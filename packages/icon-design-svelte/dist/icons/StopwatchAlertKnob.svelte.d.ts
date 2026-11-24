import { SvelteComponent } from 'svelte';

export interface StopwatchAlertKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchAlertKnob extends SvelteComponent<StopwatchAlertKnobProps> {}
