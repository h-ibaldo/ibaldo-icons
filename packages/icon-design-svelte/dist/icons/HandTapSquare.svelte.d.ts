import { SvelteComponent } from 'svelte';

export interface HandTapSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapSquare extends SvelteComponent<HandTapSquareProps> {}
