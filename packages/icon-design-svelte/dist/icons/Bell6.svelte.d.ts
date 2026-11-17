import { SvelteComponent } from 'svelte';

export interface Bell6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6 extends SvelteComponent<Bell6Props> {}
