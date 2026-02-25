import { SvelteComponent } from 'svelte';

export interface BulbIdea7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea7 extends SvelteComponent<BulbIdea7Props> {}
