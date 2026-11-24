import { SvelteComponent } from 'svelte';

export interface BellDotKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDotKnob extends SvelteComponent<BellDotKnobProps> {}
