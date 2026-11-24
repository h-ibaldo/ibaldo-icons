import { SvelteComponent } from 'svelte';

export interface BellXCircleFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXCircleFlat extends SvelteComponent<BellXCircleFlatProps> {}
