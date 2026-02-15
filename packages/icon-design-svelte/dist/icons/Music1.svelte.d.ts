import { SvelteComponent } from 'svelte';

export interface Music1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music1 extends SvelteComponent<Music1Props> {}
