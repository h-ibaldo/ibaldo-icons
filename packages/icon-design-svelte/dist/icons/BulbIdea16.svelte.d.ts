import { SvelteComponent } from 'svelte';

export interface BulbIdea16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea16 extends SvelteComponent<BulbIdea16Props> {}
