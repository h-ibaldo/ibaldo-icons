import { SvelteComponent } from 'svelte';

export interface WindowControlMinimizeSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlMinimizeSquare extends SvelteComponent<WindowControlMinimizeSquareProps> {}
