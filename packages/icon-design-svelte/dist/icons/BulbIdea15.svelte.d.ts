import { SvelteComponent } from 'svelte';

export interface BulbIdea15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea15 extends SvelteComponent<BulbIdea15Props> {}
