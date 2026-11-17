import { SvelteComponent } from 'svelte';

export interface Add1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Add1 extends SvelteComponent<Add1Props> {}
