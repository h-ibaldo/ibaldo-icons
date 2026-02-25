import { SvelteComponent } from 'svelte';

export interface ClockMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockMinus extends SvelteComponent<ClockMinusProps> {}
