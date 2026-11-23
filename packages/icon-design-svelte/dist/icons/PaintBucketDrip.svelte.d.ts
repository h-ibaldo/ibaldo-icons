import { SvelteComponent } from 'svelte';

export interface PaintBucketDripProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintBucketDrip extends SvelteComponent<PaintBucketDripProps> {}
