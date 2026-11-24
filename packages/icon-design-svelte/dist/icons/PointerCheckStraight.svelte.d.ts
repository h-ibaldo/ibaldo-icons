import { SvelteComponent } from 'svelte';

export interface PointerCheckStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerCheckStraight extends SvelteComponent<PointerCheckStraightProps> {}
