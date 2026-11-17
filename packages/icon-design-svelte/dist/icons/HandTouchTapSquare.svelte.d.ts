import { SvelteComponent } from 'svelte';

export interface HandTouchTapSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchTapSquare extends SvelteComponent<HandTouchTapSquareProps> {}
