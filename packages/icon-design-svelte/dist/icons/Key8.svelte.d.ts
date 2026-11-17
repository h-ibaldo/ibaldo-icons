import { SvelteComponent } from 'svelte';

export interface Key8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Key8 extends SvelteComponent<Key8Props> {}
