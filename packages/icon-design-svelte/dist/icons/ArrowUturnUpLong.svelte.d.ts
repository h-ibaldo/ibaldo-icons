import { SvelteComponent } from 'svelte';

export interface ArrowUturnUpLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnUpLong extends SvelteComponent<ArrowUturnUpLongProps> {}
