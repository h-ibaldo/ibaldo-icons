import { SvelteComponent } from 'svelte';

export interface BellXKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXKnob extends SvelteComponent<BellXKnobProps> {}
