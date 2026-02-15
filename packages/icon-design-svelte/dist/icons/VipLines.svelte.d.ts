import { SvelteComponent } from 'svelte';

export interface VipLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VipLines extends SvelteComponent<VipLinesProps> {}
