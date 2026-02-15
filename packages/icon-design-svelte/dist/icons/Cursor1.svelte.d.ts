import { SvelteComponent } from 'svelte';

export interface Cursor1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor1 extends SvelteComponent<Cursor1Props> {}
