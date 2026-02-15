import { SvelteComponent } from 'svelte';

export interface BulbIdea3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea3 extends SvelteComponent<BulbIdea3Props> {}
