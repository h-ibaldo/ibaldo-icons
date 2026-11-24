import { SvelteComponent } from 'svelte';

export interface GiftStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GiftStriped extends SvelteComponent<GiftStripedProps> {}
