import { SvelteComponent } from 'svelte';

export interface CloudMinusCornerTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMinusCornerTall extends SvelteComponent<CloudMinusCornerTallProps> {}
