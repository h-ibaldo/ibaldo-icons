import { SvelteComponent } from 'svelte';

export interface TargetArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TargetArrow extends SvelteComponent<TargetArrowProps> {}
