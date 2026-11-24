import { SvelteComponent } from 'svelte';

export interface ChevronDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownLeft extends SvelteComponent<ChevronDownLeftProps> {}
