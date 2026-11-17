import { SvelteComponent } from 'svelte';

export interface BellCheckCircleKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckCircleKnob extends SvelteComponent<BellCheckCircleKnobProps> {}
