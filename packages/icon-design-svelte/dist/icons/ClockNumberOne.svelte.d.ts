import { SvelteComponent } from 'svelte';

export interface ClockNumberOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockNumberOne extends SvelteComponent<ClockNumberOneProps> {}
