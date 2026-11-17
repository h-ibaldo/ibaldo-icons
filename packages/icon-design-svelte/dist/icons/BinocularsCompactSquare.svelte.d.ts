import { SvelteComponent } from 'svelte';

export interface BinocularsCompactSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsCompactSquare extends SvelteComponent<BinocularsCompactSquareProps> {}
