import { SvelteComponent } from 'svelte';

export interface MobileCubeOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileCubeOverlap extends SvelteComponent<MobileCubeOverlapProps> {}
