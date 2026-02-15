import { SvelteComponent } from 'svelte';

export interface BulbIdea18Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea18 extends SvelteComponent<BulbIdea18Props> {}
