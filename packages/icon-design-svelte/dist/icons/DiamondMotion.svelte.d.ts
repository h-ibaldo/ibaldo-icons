import { SvelteComponent } from 'svelte';

export interface DiamondMotionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiamondMotion extends SvelteComponent<DiamondMotionProps> {}
