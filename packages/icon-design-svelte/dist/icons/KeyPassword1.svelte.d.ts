import { SvelteComponent } from 'svelte';

export interface KeyPassword1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword1 extends SvelteComponent<KeyPassword1Props> {}
