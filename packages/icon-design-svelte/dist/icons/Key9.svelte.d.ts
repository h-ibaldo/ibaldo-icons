import { SvelteComponent } from 'svelte';

export interface Key9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Key9 extends SvelteComponent<Key9Props> {}
