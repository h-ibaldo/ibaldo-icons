import { SvelteComponent } from 'svelte';

export interface VipBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VipBars extends SvelteComponent<VipBarsProps> {}
