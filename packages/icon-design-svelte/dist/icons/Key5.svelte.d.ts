import { SvelteComponent } from 'svelte';

export interface Key5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Key5 extends SvelteComponent<Key5Props> {}
