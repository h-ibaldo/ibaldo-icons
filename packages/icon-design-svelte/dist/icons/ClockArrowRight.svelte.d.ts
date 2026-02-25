import { SvelteComponent } from 'svelte';

export interface ClockArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowRight extends SvelteComponent<ClockArrowRightProps> {}
