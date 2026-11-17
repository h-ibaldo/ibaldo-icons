import { SvelteComponent } from 'svelte';

export interface FastForwardSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FastForwardSquare extends SvelteComponent<FastForwardSquareProps> {}
