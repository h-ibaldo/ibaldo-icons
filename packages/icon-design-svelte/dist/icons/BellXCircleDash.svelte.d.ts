import { SvelteComponent } from 'svelte';

export interface BellXCircleDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXCircleDash extends SvelteComponent<BellXCircleDashProps> {}
