import { SvelteComponent } from 'svelte';

export interface Music7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music7 extends SvelteComponent<Music7Props> {}
