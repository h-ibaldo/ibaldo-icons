import { SvelteComponent } from 'svelte';

export interface TrashArrowDownBucketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowDownBucket extends SvelteComponent<TrashArrowDownBucketProps> {}
