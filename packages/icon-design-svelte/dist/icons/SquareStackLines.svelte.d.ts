import { SvelteComponent } from 'svelte';

export interface SquareStackLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackLines extends SvelteComponent<SquareStackLinesProps> {}
