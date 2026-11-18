import { SvelteComponent } from 'svelte';

export interface PointerCheckCircleStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerCheckCircleStraight extends SvelteComponent<PointerCheckCircleStraightProps> {}
