import { SvelteComponent } from 'svelte';

export interface ChevronLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronLeft extends SvelteComponent<ChevronLeftProps> {}
