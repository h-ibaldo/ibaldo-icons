import { SvelteComponent } from 'svelte';

export interface PointerMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerMinusCircle extends SvelteComponent<PointerMinusCircleProps> {}
