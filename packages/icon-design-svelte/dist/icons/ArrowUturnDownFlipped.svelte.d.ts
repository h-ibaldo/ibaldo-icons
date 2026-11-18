import { SvelteComponent } from 'svelte';

export interface ArrowUturnDownFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnDownFlipped extends SvelteComponent<ArrowUturnDownFlippedProps> {}
