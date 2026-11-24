import { SvelteComponent } from 'svelte';

export interface FullscreenSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FullscreenSquare extends SvelteComponent<FullscreenSquareProps> {}
