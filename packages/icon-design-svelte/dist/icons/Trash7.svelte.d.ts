import { SvelteComponent } from 'svelte';

export interface Trash7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Trash7 extends SvelteComponent<Trash7Props> {}
