import { SvelteComponent } from 'svelte';

export interface HandGiftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandGift extends SvelteComponent<HandGiftProps> {}
