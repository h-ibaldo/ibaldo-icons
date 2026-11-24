import { SvelteComponent } from 'svelte';

export interface ApproximateCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApproximateCircle extends SvelteComponent<ApproximateCircleProps> {}
