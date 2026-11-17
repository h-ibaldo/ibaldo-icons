import { SvelteComponent } from 'svelte';

export interface Scanner5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scanner5 extends SvelteComponent<Scanner5Props> {}
