import { SvelteComponent } from 'svelte';

export interface PointerXStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerXStraight extends SvelteComponent<PointerXStraightProps> {}
