import { SvelteComponent } from 'svelte';

export interface BanknoteArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteArrowLeft extends SvelteComponent<BanknoteArrowLeftProps> {}
