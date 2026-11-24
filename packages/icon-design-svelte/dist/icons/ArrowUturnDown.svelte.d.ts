import { SvelteComponent } from 'svelte';

export interface ArrowUturnDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnDown extends SvelteComponent<ArrowUturnDownProps> {}
