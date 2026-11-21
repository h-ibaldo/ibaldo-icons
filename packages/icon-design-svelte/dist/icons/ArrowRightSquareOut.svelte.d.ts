import { SvelteComponent } from 'svelte';

export interface ArrowRightSquareOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightSquareOut extends SvelteComponent<ArrowRightSquareOutProps> {}
