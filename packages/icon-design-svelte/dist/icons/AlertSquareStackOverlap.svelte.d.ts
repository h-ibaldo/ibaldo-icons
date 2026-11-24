import { SvelteComponent } from 'svelte';

export interface AlertSquareStackOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertSquareStackOverlap extends SvelteComponent<AlertSquareStackOverlapProps> {}
