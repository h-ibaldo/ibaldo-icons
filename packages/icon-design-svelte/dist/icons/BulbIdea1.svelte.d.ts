import { SvelteComponent } from 'svelte';

export interface BulbIdea1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea1 extends SvelteComponent<BulbIdea1Props> {}
