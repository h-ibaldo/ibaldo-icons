import { SvelteComponent } from 'svelte';

export interface BulbIdea20Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea20 extends SvelteComponent<BulbIdea20Props> {}
