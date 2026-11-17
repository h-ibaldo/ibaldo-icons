import { SvelteComponent } from 'svelte';

export interface ARSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ARSquare extends SvelteComponent<ARSquareProps> {}
