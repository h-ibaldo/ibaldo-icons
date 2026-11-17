import { SvelteComponent } from 'svelte';

export interface BellKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellKnob extends SvelteComponent<BellKnobProps> {}
