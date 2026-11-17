import { SvelteComponent } from 'svelte';

export interface XDeleteCircle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XDeleteCircle3 extends SvelteComponent<XDeleteCircle3Props> {}
