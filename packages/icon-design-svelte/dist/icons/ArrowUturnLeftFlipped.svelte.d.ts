import { SvelteComponent } from 'svelte';

export interface ArrowUturnLeftFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnLeftFlipped extends SvelteComponent<ArrowUturnLeftFlippedProps> {}
