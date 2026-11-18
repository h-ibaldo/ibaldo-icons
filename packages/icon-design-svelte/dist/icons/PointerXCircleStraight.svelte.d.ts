import { SvelteComponent } from 'svelte';

export interface PointerXCircleStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerXCircleStraight extends SvelteComponent<PointerXCircleStraightProps> {}
