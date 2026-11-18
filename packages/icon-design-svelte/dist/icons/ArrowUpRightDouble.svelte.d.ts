import { SvelteComponent } from 'svelte';

export interface ArrowUpRightDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightDouble extends SvelteComponent<ArrowUpRightDoubleProps> {}
