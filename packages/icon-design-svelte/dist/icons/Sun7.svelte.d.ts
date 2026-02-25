import { SvelteComponent } from 'svelte';

export interface Sun7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun7 extends SvelteComponent<Sun7Props> {}
