import { SvelteComponent } from 'svelte';

export interface XDeleteSquare3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XDeleteSquare3 extends SvelteComponent<XDeleteSquare3Props> {}
