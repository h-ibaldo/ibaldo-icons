import { SvelteComponent } from 'svelte';

export interface Trash6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Trash6 extends SvelteComponent<Trash6Props> {}
