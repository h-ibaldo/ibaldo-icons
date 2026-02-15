import { SvelteComponent } from 'svelte';

export interface BulbIdea14Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea14 extends SvelteComponent<BulbIdea14Props> {}
