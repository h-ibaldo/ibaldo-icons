import { SvelteComponent } from 'svelte';

export interface SquareArrowDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowDownLeft extends SvelteComponent<SquareArrowDownLeftProps> {}
