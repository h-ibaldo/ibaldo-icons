import { SvelteComponent } from 'svelte';

export interface PointerMinusStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerMinusStraight extends SvelteComponent<PointerMinusStraightProps> {}
