import { SvelteComponent } from 'svelte';

export interface KeypadDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeypadDots extends SvelteComponent<KeypadDotsProps> {}
