import { SvelteComponent } from 'svelte';

export interface ClockArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowDown extends SvelteComponent<ClockArrowDownProps> {}
