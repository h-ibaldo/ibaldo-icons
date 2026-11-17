import { SvelteComponent } from 'svelte';

export interface Scanner3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scanner3 extends SvelteComponent<Scanner3Props> {}
