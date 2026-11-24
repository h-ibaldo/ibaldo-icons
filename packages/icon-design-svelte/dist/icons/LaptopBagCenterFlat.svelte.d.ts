import { SvelteComponent } from 'svelte';

export interface LaptopBagCenterFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopBagCenterFlat extends SvelteComponent<LaptopBagCenterFlatProps> {}
