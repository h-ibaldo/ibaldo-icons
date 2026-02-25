import { SvelteComponent } from 'svelte';

export interface Cursor9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor9 extends SvelteComponent<Cursor9Props> {}
