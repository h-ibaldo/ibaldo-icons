import { SvelteComponent } from 'svelte';

export interface BulbIdea11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea11 extends SvelteComponent<BulbIdea11Props> {}
