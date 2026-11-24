import { SvelteComponent } from 'svelte';

export interface DotsDiamondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DotsDiamond extends SvelteComponent<DotsDiamondProps> {}
