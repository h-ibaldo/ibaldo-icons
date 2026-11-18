import { SvelteComponent } from 'svelte';

export interface ChevronDoubleLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleLeft extends SvelteComponent<ChevronDoubleLeftProps> {}
