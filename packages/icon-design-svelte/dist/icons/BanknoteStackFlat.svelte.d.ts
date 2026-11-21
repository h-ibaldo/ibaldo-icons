import { SvelteComponent } from 'svelte';

export interface BanknoteStackFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteStackFlat extends SvelteComponent<BanknoteStackFlatProps> {}
