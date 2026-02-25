import { SvelteComponent } from 'svelte';

export interface KeyPassword9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword9 extends SvelteComponent<KeyPassword9Props> {}
