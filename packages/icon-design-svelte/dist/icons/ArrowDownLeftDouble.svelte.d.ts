import { SvelteComponent } from 'svelte';

export interface ArrowDownLeftDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownLeftDouble extends SvelteComponent<ArrowDownLeftDoubleProps> {}
