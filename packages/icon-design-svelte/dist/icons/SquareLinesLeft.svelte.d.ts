import { SvelteComponent } from 'svelte';

export interface SquareLinesLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareLinesLeft extends SvelteComponent<SquareLinesLeftProps> {}
