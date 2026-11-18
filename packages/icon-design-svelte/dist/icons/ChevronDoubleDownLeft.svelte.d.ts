import { SvelteComponent } from 'svelte';

export interface ChevronDoubleDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleDownLeft extends SvelteComponent<ChevronDoubleDownLeftProps> {}
