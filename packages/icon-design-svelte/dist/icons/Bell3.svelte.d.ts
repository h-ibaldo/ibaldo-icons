import { SvelteComponent } from 'svelte';

export interface Bell3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3 extends SvelteComponent<Bell3Props> {}
