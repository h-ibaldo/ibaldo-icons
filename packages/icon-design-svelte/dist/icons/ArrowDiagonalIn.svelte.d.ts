import { SvelteComponent } from 'svelte';

export interface ArrowDiagonalInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDiagonalIn extends SvelteComponent<ArrowDiagonalInProps> {}
