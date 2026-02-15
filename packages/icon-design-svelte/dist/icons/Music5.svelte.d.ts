import { SvelteComponent } from 'svelte';

export interface Music5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music5 extends SvelteComponent<Music5Props> {}
