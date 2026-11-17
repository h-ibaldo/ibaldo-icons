import { SvelteComponent } from 'svelte';

export interface Information4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Information4 extends SvelteComponent<Information4Props> {}
