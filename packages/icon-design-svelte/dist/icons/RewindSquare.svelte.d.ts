import { SvelteComponent } from 'svelte';

export interface RewindSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RewindSquare extends SvelteComponent<RewindSquareProps> {}
