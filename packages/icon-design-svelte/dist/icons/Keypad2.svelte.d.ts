import { SvelteComponent } from 'svelte';

export interface Keypad2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keypad2 extends SvelteComponent<Keypad2Props> {}
