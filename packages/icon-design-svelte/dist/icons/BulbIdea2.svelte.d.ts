import { SvelteComponent } from 'svelte';

export interface BulbIdea2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea2 extends SvelteComponent<BulbIdea2Props> {}
