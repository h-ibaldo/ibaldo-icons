import { SvelteComponent } from 'svelte';

export interface BinocularsSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsSquare extends SvelteComponent<BinocularsSquareProps> {}
