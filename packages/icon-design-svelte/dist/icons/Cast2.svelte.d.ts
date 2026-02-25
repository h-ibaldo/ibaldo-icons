import { SvelteComponent } from 'svelte';

export interface Cast2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cast2 extends SvelteComponent<Cast2Props> {}
