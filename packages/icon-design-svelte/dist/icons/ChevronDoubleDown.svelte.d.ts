import { SvelteComponent } from 'svelte';

export interface ChevronDoubleDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDoubleDown extends SvelteComponent<ChevronDoubleDownProps> {}
