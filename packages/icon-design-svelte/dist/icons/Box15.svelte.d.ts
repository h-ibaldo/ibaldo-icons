import { SvelteComponent } from 'svelte';

export interface Box15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box15 extends SvelteComponent<Box15Props> {}
