import { SvelteComponent } from 'svelte';

export interface Sun9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun9 extends SvelteComponent<Sun9Props> {}
