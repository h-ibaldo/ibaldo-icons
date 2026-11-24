import { SvelteComponent } from 'svelte';

export interface ArrowRightDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightDouble extends SvelteComponent<ArrowRightDoubleProps> {}
