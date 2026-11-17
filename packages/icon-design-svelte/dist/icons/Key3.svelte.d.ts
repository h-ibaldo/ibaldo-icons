import { SvelteComponent } from 'svelte';

export interface Key3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Key3 extends SvelteComponent<Key3Props> {}
