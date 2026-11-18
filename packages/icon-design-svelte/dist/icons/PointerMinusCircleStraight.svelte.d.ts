import { SvelteComponent } from 'svelte';

export interface PointerMinusCircleStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerMinusCircleStraight extends SvelteComponent<PointerMinusCircleStraightProps> {}
