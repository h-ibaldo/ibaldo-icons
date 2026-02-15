import { SvelteComponent } from 'svelte';

export interface Keypad5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keypad5 extends SvelteComponent<Keypad5Props> {}
