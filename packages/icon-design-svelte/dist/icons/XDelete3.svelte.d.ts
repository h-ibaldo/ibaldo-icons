import { SvelteComponent } from 'svelte';

export interface XDelete3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XDelete3 extends SvelteComponent<XDelete3Props> {}
