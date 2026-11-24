import { SvelteComponent } from 'svelte';

export interface NotApproximateCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotApproximateCircle extends SvelteComponent<NotApproximateCircleProps> {}
