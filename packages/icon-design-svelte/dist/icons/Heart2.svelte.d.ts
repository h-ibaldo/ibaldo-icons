import { SvelteComponent } from 'svelte';

export interface Heart2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart2 extends SvelteComponent<Heart2Props> {}
