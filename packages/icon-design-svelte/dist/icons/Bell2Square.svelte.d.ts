import { SvelteComponent } from 'svelte';

export interface Bell2SquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Square extends SvelteComponent<Bell2SquareProps> {}
