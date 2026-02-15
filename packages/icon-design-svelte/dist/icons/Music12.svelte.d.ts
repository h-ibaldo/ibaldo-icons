import { SvelteComponent } from 'svelte';

export interface Music12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music12 extends SvelteComponent<Music12Props> {}
