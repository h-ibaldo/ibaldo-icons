import { SvelteComponent } from 'svelte';

export interface CrownJewelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownJewel extends SvelteComponent<CrownJewelProps> {}
