import { SvelteComponent } from 'svelte';

export interface Cursor10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor10 extends SvelteComponent<Cursor10Props> {}
