import { SvelteComponent } from 'svelte';

export interface Heart3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart3 extends SvelteComponent<Heart3Props> {}
