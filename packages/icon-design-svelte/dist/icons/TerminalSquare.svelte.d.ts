import { SvelteComponent } from 'svelte';

export interface TerminalSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TerminalSquare extends SvelteComponent<TerminalSquareProps> {}
