import { SvelteComponent } from 'svelte';

export interface BulbIdea9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea9 extends SvelteComponent<BulbIdea9Props> {}
