import { SvelteComponent } from 'svelte';

export interface Music13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music13 extends SvelteComponent<Music13Props> {}
