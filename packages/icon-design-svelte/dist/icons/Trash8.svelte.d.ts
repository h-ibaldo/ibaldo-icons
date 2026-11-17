import { SvelteComponent } from 'svelte';

export interface Trash8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Trash8 extends SvelteComponent<Trash8Props> {}
