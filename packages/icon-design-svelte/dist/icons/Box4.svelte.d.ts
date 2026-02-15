import { SvelteComponent } from 'svelte';

export interface Box4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box4 extends SvelteComponent<Box4Props> {}
