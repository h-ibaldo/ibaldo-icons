import { SvelteComponent } from 'svelte';

export interface BanknoteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Banknote extends SvelteComponent<BanknoteProps> {}
