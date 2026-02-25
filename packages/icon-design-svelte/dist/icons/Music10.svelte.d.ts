import { SvelteComponent } from 'svelte';

export interface Music10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music10 extends SvelteComponent<Music10Props> {}
