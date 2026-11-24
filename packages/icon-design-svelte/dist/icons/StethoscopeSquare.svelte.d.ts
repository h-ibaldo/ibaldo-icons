import { SvelteComponent } from 'svelte';

export interface StethoscopeSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StethoscopeSquare extends SvelteComponent<StethoscopeSquareProps> {}
