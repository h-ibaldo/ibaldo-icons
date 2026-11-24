import { SvelteComponent } from 'svelte';

export interface TrashXBucketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashXBucket extends SvelteComponent<TrashXBucketProps> {}
