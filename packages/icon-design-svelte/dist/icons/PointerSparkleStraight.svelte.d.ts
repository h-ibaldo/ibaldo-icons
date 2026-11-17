import { SvelteComponent } from 'svelte';

export interface PointerSparkleStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerSparkleStraight extends SvelteComponent<PointerSparkleStraightProps> {}
