import { SvelteComponent } from 'svelte';

export interface GripHorizontalStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripHorizontalStripes extends SvelteComponent<GripHorizontalStripesProps> {}
