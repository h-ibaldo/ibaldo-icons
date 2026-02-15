import { SvelteComponent } from 'svelte';

export interface Sun4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun4 extends SvelteComponent<Sun4Props> {}
