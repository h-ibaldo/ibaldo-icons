import { SvelteComponent } from 'svelte';

export interface BadgeCheckSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckSquare extends SvelteComponent<BadgeCheckSquareProps> {}
