import { SvelteComponent } from 'svelte';

export interface Box3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box3 extends SvelteComponent<Box3Props> {}
