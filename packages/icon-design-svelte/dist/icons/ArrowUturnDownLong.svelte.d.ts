import { SvelteComponent } from 'svelte';

export interface ArrowUturnDownLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnDownLong extends SvelteComponent<ArrowUturnDownLongProps> {}
