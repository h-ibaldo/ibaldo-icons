import { SvelteComponent } from 'svelte';

export interface XDeleteSquare1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XDeleteSquare1 extends SvelteComponent<XDeleteSquare1Props> {}
