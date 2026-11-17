import { SvelteComponent } from 'svelte';

export interface PointerStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerStraight extends SvelteComponent<PointerStraightProps> {}
