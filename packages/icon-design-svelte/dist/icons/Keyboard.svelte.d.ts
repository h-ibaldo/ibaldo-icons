import { SvelteComponent } from 'svelte';

export interface KeyboardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Keyboard extends SvelteComponent<KeyboardProps> {}
