import { SvelteComponent } from 'svelte';

export interface SquarePaddingLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquarePaddingLeft extends SvelteComponent<SquarePaddingLeftProps> {}
