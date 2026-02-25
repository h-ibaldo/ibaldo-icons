import { SvelteComponent } from 'svelte';

export interface ClockArrowsLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowsLeftRight extends SvelteComponent<ClockArrowsLeftRightProps> {}
