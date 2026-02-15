import { SvelteComponent } from 'svelte';

export interface Keypad4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keypad4 extends SvelteComponent<Keypad4Props> {}
