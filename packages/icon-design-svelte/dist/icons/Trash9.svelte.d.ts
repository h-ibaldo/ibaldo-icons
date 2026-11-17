import { SvelteComponent } from 'svelte';

export interface Trash9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Trash9 extends SvelteComponent<Trash9Props> {}
