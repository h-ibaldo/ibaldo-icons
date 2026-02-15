import { SvelteComponent } from 'svelte';

export interface BulbIdea10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea10 extends SvelteComponent<BulbIdea10Props> {}
