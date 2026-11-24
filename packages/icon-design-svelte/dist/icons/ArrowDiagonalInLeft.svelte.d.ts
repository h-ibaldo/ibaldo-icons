import { SvelteComponent } from 'svelte';

export interface ArrowDiagonalInLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDiagonalInLeft extends SvelteComponent<ArrowDiagonalInLeftProps> {}
