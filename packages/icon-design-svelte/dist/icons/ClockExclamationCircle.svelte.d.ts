import { SvelteComponent } from 'svelte';

export interface ClockExclamationCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockExclamationCircle extends SvelteComponent<ClockExclamationCircleProps> {}
