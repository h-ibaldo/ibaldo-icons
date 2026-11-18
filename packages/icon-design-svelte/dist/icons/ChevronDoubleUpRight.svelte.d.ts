import { SvelteComponent } from 'svelte';

export interface ChevronDoubleUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleUpRight extends SvelteComponent<ChevronDoubleUpRightProps> {}
