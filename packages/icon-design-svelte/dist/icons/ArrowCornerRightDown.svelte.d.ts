import { SvelteComponent } from 'svelte';

export interface ArrowCornerRightDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornerRightDown extends SvelteComponent<ArrowCornerRightDownProps> {}
