import { SvelteComponent } from 'svelte';

export interface Information3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Information3 extends SvelteComponent<Information3Props> {}
