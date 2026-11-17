import { SvelteComponent } from 'svelte';

export interface WindowSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSquare extends SvelteComponent<WindowSquareProps> {}
