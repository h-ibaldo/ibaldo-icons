import { SvelteComponent } from 'svelte';

export interface BanknoteArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteArrowRight extends SvelteComponent<BanknoteArrowRightProps> {}
