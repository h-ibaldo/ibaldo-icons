import { SvelteComponent } from 'svelte';

export interface GiftRibbonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GiftRibbon extends SvelteComponent<GiftRibbonProps> {}
