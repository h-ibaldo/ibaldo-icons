import { SvelteComponent } from 'svelte';

export interface KeyPasswordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword extends SvelteComponent<KeyPasswordProps> {}
