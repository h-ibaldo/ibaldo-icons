import { SvelteComponent } from 'svelte';

export interface ArrowUturnRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnRight extends SvelteComponent<ArrowUturnRightProps> {}
