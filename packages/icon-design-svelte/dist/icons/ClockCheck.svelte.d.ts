import { SvelteComponent } from 'svelte';

export interface ClockCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockCheck extends SvelteComponent<ClockCheckProps> {}
