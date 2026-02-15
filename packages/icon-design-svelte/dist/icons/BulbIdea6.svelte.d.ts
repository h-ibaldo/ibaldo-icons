import { SvelteComponent } from 'svelte';

export interface BulbIdea6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea6 extends SvelteComponent<BulbIdea6Props> {}
