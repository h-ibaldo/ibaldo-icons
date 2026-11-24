import { SvelteComponent } from 'svelte';

export interface ChevronDoubleRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleRight extends SvelteComponent<ChevronDoubleRightProps> {}
