import { SvelteComponent } from 'svelte';

export interface Cursor4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor4 extends SvelteComponent<Cursor4Props> {}
