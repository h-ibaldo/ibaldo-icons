import { SvelteComponent } from 'svelte';

export interface WindowControlRestoreSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlRestoreSquare extends SvelteComponent<WindowControlRestoreSquareProps> {}
