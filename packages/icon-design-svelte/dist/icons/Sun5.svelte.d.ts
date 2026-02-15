import { SvelteComponent } from 'svelte';

export interface Sun5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun5 extends SvelteComponent<Sun5Props> {}
