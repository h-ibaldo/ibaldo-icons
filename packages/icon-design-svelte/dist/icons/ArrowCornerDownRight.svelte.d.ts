import { SvelteComponent } from 'svelte';

export interface ArrowCornerDownRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornerDownRight extends SvelteComponent<ArrowCornerDownRightProps> {}
