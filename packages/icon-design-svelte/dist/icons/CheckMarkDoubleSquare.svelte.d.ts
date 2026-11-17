import { SvelteComponent } from 'svelte';

export interface CheckMarkDoubleSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkDoubleSquare extends SvelteComponent<CheckMarkDoubleSquareProps> {}
