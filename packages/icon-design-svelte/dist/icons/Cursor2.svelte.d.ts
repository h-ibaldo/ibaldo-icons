import { SvelteComponent } from 'svelte';

export interface Cursor2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor2 extends SvelteComponent<Cursor2Props> {}
