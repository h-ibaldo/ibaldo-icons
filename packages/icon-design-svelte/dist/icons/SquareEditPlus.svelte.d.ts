import { SvelteComponent } from 'svelte';

export interface SquareEditPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareEditPlus extends SvelteComponent<SquareEditPlusProps> {}
