import { SvelteComponent } from 'svelte';

export interface Warning3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Warning3 extends SvelteComponent<Warning3Props> {}
