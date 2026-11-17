import { SvelteComponent } from 'svelte';

export interface Bell5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5 extends SvelteComponent<Bell5Props> {}
