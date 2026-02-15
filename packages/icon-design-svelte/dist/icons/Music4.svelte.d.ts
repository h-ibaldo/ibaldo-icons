import { SvelteComponent } from 'svelte';

export interface Music4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music4 extends SvelteComponent<Music4Props> {}
