import { SvelteComponent } from 'svelte';

export interface BellTiltedFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellTiltedFlat extends SvelteComponent<BellTiltedFlatProps> {}
