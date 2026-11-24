import { SvelteComponent } from 'svelte';

export interface BellXCircleKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXCircleKnob extends SvelteComponent<BellXCircleKnobProps> {}
