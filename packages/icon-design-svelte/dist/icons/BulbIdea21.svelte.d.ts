import { SvelteComponent } from 'svelte';

export interface BulbIdea21Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea21 extends SvelteComponent<BulbIdea21Props> {}
