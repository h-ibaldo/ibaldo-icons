import { SvelteComponent } from 'svelte';

export interface TrashArrowUpBucketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowUpBucket extends SvelteComponent<TrashArrowUpBucketProps> {}
