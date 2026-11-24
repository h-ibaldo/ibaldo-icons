import { SvelteComponent } from 'svelte';

export interface PaintBucketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaintBucket extends SvelteComponent<PaintBucketProps> {}
