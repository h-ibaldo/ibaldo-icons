import { SvelteComponent } from 'svelte';

export interface Key6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Key6 extends SvelteComponent<Key6Props> {}
