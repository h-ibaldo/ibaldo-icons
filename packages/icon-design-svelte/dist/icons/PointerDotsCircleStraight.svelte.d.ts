import { SvelteComponent } from 'svelte';

export interface PointerDotsCircleStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerDotsCircleStraight extends SvelteComponent<PointerDotsCircleStraightProps> {}
