import { SvelteComponent } from 'svelte';

export interface KeyPassword11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword11 extends SvelteComponent<KeyPassword11Props> {}
