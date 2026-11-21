import { SvelteComponent } from 'svelte';

export interface HandBanknoteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandBanknote extends SvelteComponent<HandBanknoteProps> {}
