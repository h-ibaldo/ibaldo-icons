import { SvelteComponent } from 'svelte';

export interface CheckSquareOpenSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareOpenSquare extends SvelteComponent<CheckSquareOpenSquareProps> {}
