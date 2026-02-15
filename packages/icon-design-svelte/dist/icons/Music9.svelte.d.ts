import { SvelteComponent } from 'svelte';

export interface Music9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music9 extends SvelteComponent<Music9Props> {}
