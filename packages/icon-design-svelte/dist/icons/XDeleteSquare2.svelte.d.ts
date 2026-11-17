import { SvelteComponent } from 'svelte';

export interface XDeleteSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XDeleteSquare2 extends SvelteComponent<XDeleteSquare2Props> {}
