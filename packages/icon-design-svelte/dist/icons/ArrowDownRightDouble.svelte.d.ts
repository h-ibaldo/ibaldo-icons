import { SvelteComponent } from 'svelte';

export interface ArrowDownRightDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownRightDouble extends SvelteComponent<ArrowDownRightDoubleProps> {}
