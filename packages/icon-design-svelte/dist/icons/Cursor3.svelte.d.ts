import { SvelteComponent } from 'svelte';

export interface Cursor3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor3 extends SvelteComponent<Cursor3Props> {}
