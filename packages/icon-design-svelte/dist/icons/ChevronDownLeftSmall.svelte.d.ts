import { SvelteComponent } from 'svelte';

export interface ChevronDownLeftSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownLeftSmall extends SvelteComponent<ChevronDownLeftSmallProps> {}
