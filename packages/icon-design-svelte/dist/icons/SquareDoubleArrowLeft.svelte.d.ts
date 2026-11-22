import { SvelteComponent } from 'svelte';

export interface SquareDoubleArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDoubleArrowLeft extends SvelteComponent<SquareDoubleArrowLeftProps> {}
