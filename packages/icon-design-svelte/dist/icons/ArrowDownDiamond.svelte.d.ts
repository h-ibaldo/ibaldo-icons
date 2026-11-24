import { SvelteComponent } from 'svelte';

export interface ArrowDownDiamondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownDiamond extends SvelteComponent<ArrowDownDiamondProps> {}
