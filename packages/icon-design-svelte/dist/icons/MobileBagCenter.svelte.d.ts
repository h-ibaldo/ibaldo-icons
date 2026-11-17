import { SvelteComponent } from 'svelte';

export interface MobileBagCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileBagCenter extends SvelteComponent<MobileBagCenterProps> {}
