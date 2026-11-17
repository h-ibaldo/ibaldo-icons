import { SvelteComponent } from 'svelte';

export interface BellSnoozeKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSnoozeKnob extends SvelteComponent<BellSnoozeKnobProps> {}
