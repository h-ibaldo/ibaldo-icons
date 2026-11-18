import { SvelteComponent } from 'svelte';

export interface TrashCheckBucketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashCheckBucket extends SvelteComponent<TrashCheckBucketProps> {}
