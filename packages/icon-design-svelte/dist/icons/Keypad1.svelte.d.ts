import { SvelteComponent } from 'svelte';

export interface Keypad1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keypad1 extends SvelteComponent<Keypad1Props> {}
