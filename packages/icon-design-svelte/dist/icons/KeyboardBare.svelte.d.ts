import { SvelteComponent } from 'svelte';

export interface KeyboardBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyboardBare extends SvelteComponent<KeyboardBareProps> {}
