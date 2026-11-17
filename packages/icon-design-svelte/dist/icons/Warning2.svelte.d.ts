import { SvelteComponent } from 'svelte';

export interface Warning2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Warning2 extends SvelteComponent<Warning2Props> {}
