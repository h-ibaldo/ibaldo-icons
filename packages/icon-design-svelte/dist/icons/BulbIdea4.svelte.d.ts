import { SvelteComponent } from 'svelte';

export interface BulbIdea4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea4 extends SvelteComponent<BulbIdea4Props> {}
