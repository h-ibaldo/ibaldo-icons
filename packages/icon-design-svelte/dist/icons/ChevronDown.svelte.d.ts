import { SvelteComponent } from 'svelte';

export interface ChevronDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDown extends SvelteComponent<ChevronDownProps> {}
