import { SvelteComponent } from 'svelte';

export interface KeyboardOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyboardOff extends SvelteComponent<KeyboardOffProps> {}
