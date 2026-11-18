import { SvelteComponent } from 'svelte';

export interface ArrowDownDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownDouble extends SvelteComponent<ArrowDownDoubleProps> {}
