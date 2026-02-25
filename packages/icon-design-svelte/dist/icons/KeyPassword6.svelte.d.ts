import { SvelteComponent } from 'svelte';

export interface KeyPassword6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword6 extends SvelteComponent<KeyPassword6Props> {}
