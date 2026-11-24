import { SvelteComponent } from 'svelte';

export interface ArrowCornerRightUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornerRightUp extends SvelteComponent<ArrowCornerRightUpProps> {}
