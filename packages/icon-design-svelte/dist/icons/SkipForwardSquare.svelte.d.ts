import { SvelteComponent } from 'svelte';

export interface SkipForwardSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardSquare extends SvelteComponent<SkipForwardSquareProps> {}
