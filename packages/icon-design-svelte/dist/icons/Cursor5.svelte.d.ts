import { SvelteComponent } from 'svelte';

export interface Cursor5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor5 extends SvelteComponent<Cursor5Props> {}
