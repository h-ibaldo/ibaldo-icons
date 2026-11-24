import { SvelteComponent } from 'svelte';

export interface CheckDoubleSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckDoubleSquare extends SvelteComponent<CheckDoubleSquareProps> {}
