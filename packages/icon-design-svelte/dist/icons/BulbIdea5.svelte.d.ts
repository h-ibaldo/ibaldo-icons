import { SvelteComponent } from 'svelte';

export interface BulbIdea5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea5 extends SvelteComponent<BulbIdea5Props> {}
