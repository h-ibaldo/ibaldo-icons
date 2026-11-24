import { SvelteComponent } from 'svelte';

export interface CheckCircleOpenSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleOpenSquare extends SvelteComponent<CheckCircleOpenSquareProps> {}
