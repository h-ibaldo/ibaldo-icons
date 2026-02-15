import { SvelteComponent } from 'svelte';

export interface KeyPassword2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword2 extends SvelteComponent<KeyPassword2Props> {}
