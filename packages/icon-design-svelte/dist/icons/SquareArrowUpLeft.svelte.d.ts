import { SvelteComponent } from 'svelte';

export interface SquareArrowUpLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowUpLeft extends SvelteComponent<SquareArrowUpLeftProps> {}
