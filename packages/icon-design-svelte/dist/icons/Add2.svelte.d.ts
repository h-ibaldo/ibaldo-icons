import { SvelteComponent } from 'svelte';

export interface Add2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Add2 extends SvelteComponent<Add2Props> {}
