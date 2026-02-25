import { SvelteComponent } from 'svelte';

export interface ClockArrowCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowCircle extends SvelteComponent<ClockArrowCircleProps> {}
