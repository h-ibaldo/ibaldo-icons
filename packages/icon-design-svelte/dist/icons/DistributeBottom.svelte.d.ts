import { SvelteComponent } from 'svelte';

export interface DistributeBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeBottom extends SvelteComponent<DistributeBottomProps> {}
