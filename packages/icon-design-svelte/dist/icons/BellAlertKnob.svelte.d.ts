import { SvelteComponent } from 'svelte';

export interface BellAlertKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellAlertKnob extends SvelteComponent<BellAlertKnobProps> {}
