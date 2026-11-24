import { SvelteComponent } from 'svelte';

export interface SquareStackXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackX extends SvelteComponent<SquareStackXProps> {}
