import { SvelteComponent } from 'svelte';

export interface PercentDiamondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PercentDiamond extends SvelteComponent<PercentDiamondProps> {}
