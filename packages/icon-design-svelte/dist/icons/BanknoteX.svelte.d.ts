import { SvelteComponent } from 'svelte';

export interface BanknoteXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteX extends SvelteComponent<BanknoteXProps> {}
