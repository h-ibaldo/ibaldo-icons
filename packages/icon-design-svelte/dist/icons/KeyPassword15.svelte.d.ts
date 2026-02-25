import { SvelteComponent } from 'svelte';

export interface KeyPassword15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyPassword15 extends SvelteComponent<KeyPassword15Props> {}
