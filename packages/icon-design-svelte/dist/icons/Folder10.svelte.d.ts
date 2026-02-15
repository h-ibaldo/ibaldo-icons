import { SvelteComponent } from 'svelte';

export interface Folder10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Folder10 extends SvelteComponent<Folder10Props> {}
