import { SvelteComponent } from 'svelte';

export interface KeyPassword3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword3 extends SvelteComponent<KeyPassword3Props> {}
