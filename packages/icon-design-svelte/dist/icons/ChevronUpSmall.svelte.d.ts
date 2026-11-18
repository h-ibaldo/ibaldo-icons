import { SvelteComponent } from 'svelte';

export interface ChevronUpSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpSmall extends SvelteComponent<ChevronUpSmallProps> {}
