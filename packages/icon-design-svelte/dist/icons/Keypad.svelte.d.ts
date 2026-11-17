import { SvelteComponent } from 'svelte';

export interface KeypadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keypad extends SvelteComponent<KeypadProps> {}
