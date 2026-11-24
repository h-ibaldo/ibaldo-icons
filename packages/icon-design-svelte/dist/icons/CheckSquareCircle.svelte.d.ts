import { SvelteComponent } from 'svelte';

export interface CheckSquareCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareCircle extends SvelteComponent<CheckSquareCircleProps> {}
