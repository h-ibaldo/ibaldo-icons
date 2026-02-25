import { SvelteComponent } from 'svelte';

export interface Heart1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart1 extends SvelteComponent<Heart1Props> {}
