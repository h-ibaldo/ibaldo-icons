import { SvelteComponent } from 'svelte';

export interface CheckMarkDoubleVerifiedSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkDoubleVerifiedSquare extends SvelteComponent<CheckMarkDoubleVerifiedSquareProps> {}
