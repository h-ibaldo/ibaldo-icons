import { SvelteComponent } from 'svelte';

export interface AsteriskFiveSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AsteriskFiveSquare extends SvelteComponent<AsteriskFiveSquareProps> {}
