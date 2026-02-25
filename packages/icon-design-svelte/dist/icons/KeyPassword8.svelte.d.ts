import { SvelteComponent } from 'svelte';

export interface KeyPassword8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword8 extends SvelteComponent<KeyPassword8Props> {}
