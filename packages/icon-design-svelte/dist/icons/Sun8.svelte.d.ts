import { SvelteComponent } from 'svelte';

export interface Sun8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun8 extends SvelteComponent<Sun8Props> {}
