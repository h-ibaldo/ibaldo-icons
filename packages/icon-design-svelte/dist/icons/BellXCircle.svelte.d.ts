import { SvelteComponent } from 'svelte';

export interface BellXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXCircle extends SvelteComponent<BellXCircleProps> {}
