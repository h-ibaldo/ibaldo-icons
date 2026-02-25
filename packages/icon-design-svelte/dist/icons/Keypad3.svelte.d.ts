import { SvelteComponent } from 'svelte';

export interface Keypad3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keypad3 extends SvelteComponent<Keypad3Props> {}
