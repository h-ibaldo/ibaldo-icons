import { SvelteComponent } from 'svelte';

export interface TrashSquareBucketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashSquareBucket extends SvelteComponent<TrashSquareBucketProps> {}
