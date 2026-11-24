import { SvelteComponent } from 'svelte';

export interface DistributeTopBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeTopBottom extends SvelteComponent<DistributeTopBottomProps> {}
