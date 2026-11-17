import { SvelteComponent } from 'svelte';

export interface BellCheckKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckKnob extends SvelteComponent<BellCheckKnobProps> {}
