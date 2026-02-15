import { SvelteComponent } from 'svelte';

export interface Music6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music6 extends SvelteComponent<Music6Props> {}
