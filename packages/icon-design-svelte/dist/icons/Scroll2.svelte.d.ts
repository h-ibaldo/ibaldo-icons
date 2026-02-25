import { SvelteComponent } from 'svelte';

export interface Scroll2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scroll2 extends SvelteComponent<Scroll2Props> {}
