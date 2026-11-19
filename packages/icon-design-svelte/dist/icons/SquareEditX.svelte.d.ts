import { SvelteComponent } from 'svelte';

export interface SquareEditXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareEditX extends SvelteComponent<SquareEditXProps> {}
