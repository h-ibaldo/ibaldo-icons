import { SvelteComponent } from 'svelte';

export interface Music2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music2 extends SvelteComponent<Music2Props> {}
