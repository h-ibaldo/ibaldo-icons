import { SvelteComponent } from 'svelte';

export interface BulbIdea19Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea19 extends SvelteComponent<BulbIdea19Props> {}
