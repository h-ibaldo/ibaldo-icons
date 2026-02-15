import { SvelteComponent } from 'svelte';

export interface Cursor8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor8 extends SvelteComponent<Cursor8Props> {}
