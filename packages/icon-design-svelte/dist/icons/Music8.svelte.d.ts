import { SvelteComponent } from 'svelte';

export interface Music8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music8 extends SvelteComponent<Music8Props> {}
