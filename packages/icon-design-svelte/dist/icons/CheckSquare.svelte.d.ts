import { SvelteComponent } from 'svelte';

export interface CheckSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquare extends SvelteComponent<CheckSquareProps> {}
