import { SvelteComponent } from 'svelte';

export interface Bell4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4 extends SvelteComponent<Bell4Props> {}
