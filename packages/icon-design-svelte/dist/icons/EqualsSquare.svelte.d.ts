import { SvelteComponent } from 'svelte';

export interface EqualsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EqualsSquare extends SvelteComponent<EqualsSquareProps> {}
