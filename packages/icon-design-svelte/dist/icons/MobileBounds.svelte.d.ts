import { SvelteComponent } from 'svelte';

export interface MobileBoundsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileBounds extends SvelteComponent<MobileBoundsProps> {}
