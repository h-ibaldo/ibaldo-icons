import { SvelteComponent } from 'svelte';

export interface XArrowBack2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XArrowBack2 extends SvelteComponent<XArrowBack2Props> {}
