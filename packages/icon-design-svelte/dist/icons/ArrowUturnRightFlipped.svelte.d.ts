import { SvelteComponent } from 'svelte';

export interface ArrowUturnRightFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnRightFlipped extends SvelteComponent<ArrowUturnRightFlippedProps> {}
