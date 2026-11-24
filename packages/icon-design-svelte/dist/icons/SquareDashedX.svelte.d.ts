import { SvelteComponent } from 'svelte';

export interface SquareDashedXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDashedX extends SvelteComponent<SquareDashedXProps> {}
