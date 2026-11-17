import { SvelteComponent } from 'svelte';

export interface House4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House4 extends SvelteComponent<House4Props> {}
