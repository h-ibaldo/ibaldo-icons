import { SvelteComponent } from 'svelte';

export interface Music3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Music3 extends SvelteComponent<Music3Props> {}
