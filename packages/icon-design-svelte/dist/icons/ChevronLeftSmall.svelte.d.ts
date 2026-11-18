import { SvelteComponent } from 'svelte';

export interface ChevronLeftSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronLeftSmall extends SvelteComponent<ChevronLeftSmallProps> {}
