import { SvelteComponent } from 'svelte';

export interface DiamondMotionDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiamondMotionDotted extends SvelteComponent<DiamondMotionDottedProps> {}
