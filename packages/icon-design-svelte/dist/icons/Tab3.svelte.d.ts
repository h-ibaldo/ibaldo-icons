import { SvelteComponent } from 'svelte';

export interface Tab3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3 extends SvelteComponent<Tab3Props> {}
