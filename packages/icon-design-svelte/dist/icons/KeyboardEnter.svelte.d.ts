import { SvelteComponent } from 'svelte';

export interface KeyboardEnterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyboardEnter extends SvelteComponent<KeyboardEnterProps> {}
