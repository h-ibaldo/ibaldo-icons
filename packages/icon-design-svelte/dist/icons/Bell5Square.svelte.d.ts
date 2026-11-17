import { SvelteComponent } from 'svelte';

export interface Bell5SquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Square extends SvelteComponent<Bell5SquareProps> {}
