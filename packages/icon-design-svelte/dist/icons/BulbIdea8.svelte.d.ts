import { SvelteComponent } from 'svelte';

export interface BulbIdea8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea8 extends SvelteComponent<BulbIdea8Props> {}
