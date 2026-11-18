import { SvelteComponent } from 'svelte';

export interface ArrowUturnUpFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnUpFlipped extends SvelteComponent<ArrowUturnUpFlippedProps> {}
