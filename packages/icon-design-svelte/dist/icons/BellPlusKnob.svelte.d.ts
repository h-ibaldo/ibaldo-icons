import { SvelteComponent } from 'svelte';

export interface BellPlusKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellPlusKnob extends SvelteComponent<BellPlusKnobProps> {}
