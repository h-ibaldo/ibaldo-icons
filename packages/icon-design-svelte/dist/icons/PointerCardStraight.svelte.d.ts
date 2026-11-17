import { SvelteComponent } from 'svelte';

export interface PointerCardStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerCardStraight extends SvelteComponent<PointerCardStraightProps> {}
