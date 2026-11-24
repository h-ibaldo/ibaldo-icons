import { SvelteComponent } from 'svelte';

export interface ArrowUpDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpDouble extends SvelteComponent<ArrowUpDoubleProps> {}
