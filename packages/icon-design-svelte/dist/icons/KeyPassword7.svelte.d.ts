import { SvelteComponent } from 'svelte';

export interface KeyPassword7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword7 extends SvelteComponent<KeyPassword7Props> {}
