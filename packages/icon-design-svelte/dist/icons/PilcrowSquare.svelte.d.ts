import { SvelteComponent } from 'svelte';

export interface PilcrowSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PilcrowSquare extends SvelteComponent<PilcrowSquareProps> {}
