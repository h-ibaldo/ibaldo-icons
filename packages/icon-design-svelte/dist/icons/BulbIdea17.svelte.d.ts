import { SvelteComponent } from 'svelte';

export interface BulbIdea17Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea17 extends SvelteComponent<BulbIdea17Props> {}
