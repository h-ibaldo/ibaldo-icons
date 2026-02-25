import { SvelteComponent } from 'svelte';

export interface Music11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music11 extends SvelteComponent<Music11Props> {}
