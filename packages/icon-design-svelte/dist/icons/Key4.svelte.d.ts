import { SvelteComponent } from 'svelte';

export interface Key4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Key4 extends SvelteComponent<Key4Props> {}
