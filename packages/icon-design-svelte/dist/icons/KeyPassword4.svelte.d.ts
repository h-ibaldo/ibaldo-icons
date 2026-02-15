import { SvelteComponent } from 'svelte';

export interface KeyPassword4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword4 extends SvelteComponent<KeyPassword4Props> {}
