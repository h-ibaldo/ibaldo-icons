import { SvelteComponent } from 'svelte';

export interface SkipBackSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBackSquare extends SvelteComponent<SkipBackSquareProps> {}
