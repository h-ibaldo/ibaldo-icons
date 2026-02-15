import { SvelteComponent } from 'svelte';

export interface KeyPassword12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword12 extends SvelteComponent<KeyPassword12Props> {}
