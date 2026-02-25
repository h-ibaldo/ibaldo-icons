import { SvelteComponent } from 'svelte';

export interface BulbIdea13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea13 extends SvelteComponent<BulbIdea13Props> {}
