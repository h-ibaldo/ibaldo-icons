import { SvelteComponent } from 'svelte';

export interface Sun3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun3 extends SvelteComponent<Sun3Props> {}
