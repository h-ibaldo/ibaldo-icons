import { SvelteComponent } from 'svelte';

export interface SignalBarsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalBarsSquare extends SvelteComponent<SignalBarsSquareProps> {}
