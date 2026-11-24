import { SvelteComponent } from 'svelte';

export interface SquarePaddingVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquarePaddingVertical extends SvelteComponent<SquarePaddingVerticalProps> {}
