import { SvelteComponent } from 'svelte';

export interface Box5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box5 extends SvelteComponent<Box5Props> {}
