import { SvelteComponent } from 'svelte';

export interface KeyPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPlain extends SvelteComponent<KeyPlainProps> {}
