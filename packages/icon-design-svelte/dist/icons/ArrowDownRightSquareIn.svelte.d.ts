import { SvelteComponent } from 'svelte';

export interface ArrowDownRightSquareInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownRightSquareIn extends SvelteComponent<ArrowDownRightSquareInProps> {}
