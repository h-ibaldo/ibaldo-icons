import { SvelteComponent } from 'svelte';

export interface ClockArrowLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowLeftRight extends SvelteComponent<ClockArrowLeftRightProps> {}
