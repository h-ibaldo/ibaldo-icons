import { SvelteComponent } from 'svelte';

export interface ChevronDoubleUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleUp extends SvelteComponent<ChevronDoubleUpProps> {}
