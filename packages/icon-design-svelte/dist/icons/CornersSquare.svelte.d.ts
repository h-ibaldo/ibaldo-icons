import { SvelteComponent } from 'svelte';

export interface CornersSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CornersSquare extends SvelteComponent<CornersSquareProps> {}
