import { SvelteComponent } from 'svelte';

export interface ApproximateSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApproximateSquare extends SvelteComponent<ApproximateSquareProps> {}
