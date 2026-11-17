import { SvelteComponent } from 'svelte';

export interface Newspaper9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper9 extends SvelteComponent<Newspaper9Props> {}
