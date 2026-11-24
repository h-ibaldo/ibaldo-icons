import { SvelteComponent } from 'svelte';

export interface BellXCircleRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXCircleRim extends SvelteComponent<BellXCircleRimProps> {}
