import { SvelteComponent } from 'svelte';

export interface SquareRowsThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareRowsThree extends SvelteComponent<SquareRowsThreeProps> {}
