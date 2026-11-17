import { SvelteComponent } from 'svelte';

export interface WarningSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningSquare extends SvelteComponent<WarningSquareProps> {}
