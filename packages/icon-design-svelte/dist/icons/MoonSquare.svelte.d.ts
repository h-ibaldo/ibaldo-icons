import { SvelteComponent } from 'svelte';

export interface MoonSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonSquare extends SvelteComponent<MoonSquareProps> {}
