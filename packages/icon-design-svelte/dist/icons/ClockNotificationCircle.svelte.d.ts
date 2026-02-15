import { SvelteComponent } from 'svelte';

export interface ClockNotificationCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockNotificationCircle extends SvelteComponent<ClockNotificationCircleProps> {}
