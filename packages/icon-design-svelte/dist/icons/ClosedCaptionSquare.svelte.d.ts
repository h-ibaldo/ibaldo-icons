import { SvelteComponent } from 'svelte';

export interface ClosedCaptionSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionSquare extends SvelteComponent<ClosedCaptionSquareProps> {}
