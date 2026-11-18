import { SvelteComponent } from 'svelte';

export interface CheckOverlineSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckOverlineSquare extends SvelteComponent<CheckOverlineSquareProps> {}
