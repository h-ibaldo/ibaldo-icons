import { SvelteComponent } from 'svelte';

export interface SpinnerDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerDots extends SvelteComponent<SpinnerDotsProps> {}
