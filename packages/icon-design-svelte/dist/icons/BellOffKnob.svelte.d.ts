import { SvelteComponent } from 'svelte';

export interface BellOffKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOffKnob extends SvelteComponent<BellOffKnobProps> {}
