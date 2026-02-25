import { SvelteComponent } from 'svelte';

export interface Box12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box12 extends SvelteComponent<Box12Props> {}
