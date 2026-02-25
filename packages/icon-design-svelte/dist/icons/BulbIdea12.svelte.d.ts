import { SvelteComponent } from 'svelte';

export interface BulbIdea12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea12 extends SvelteComponent<BulbIdea12Props> {}
