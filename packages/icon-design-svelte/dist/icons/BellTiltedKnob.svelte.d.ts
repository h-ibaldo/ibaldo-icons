import { SvelteComponent } from 'svelte';

export interface BellTiltedKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellTiltedKnob extends SvelteComponent<BellTiltedKnobProps> {}
