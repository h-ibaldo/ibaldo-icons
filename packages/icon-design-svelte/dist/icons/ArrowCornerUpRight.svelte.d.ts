import { SvelteComponent } from 'svelte';

export interface ArrowCornerUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornerUpRight extends SvelteComponent<ArrowCornerUpRightProps> {}
