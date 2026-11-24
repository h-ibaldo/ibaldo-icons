import { SvelteComponent } from 'svelte';

export interface CheckUnderlineSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckUnderlineSquare extends SvelteComponent<CheckUnderlineSquareProps> {}
