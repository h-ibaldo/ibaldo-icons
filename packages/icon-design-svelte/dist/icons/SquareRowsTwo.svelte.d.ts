import { SvelteComponent } from 'svelte';

export interface SquareRowsTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareRowsTwo extends SvelteComponent<SquareRowsTwoProps> {}
