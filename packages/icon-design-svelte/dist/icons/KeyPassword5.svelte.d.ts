import { SvelteComponent } from 'svelte';

export interface KeyPassword5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword5 extends SvelteComponent<KeyPassword5Props> {}
