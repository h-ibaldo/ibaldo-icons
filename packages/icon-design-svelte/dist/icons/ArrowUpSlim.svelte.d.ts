import { SvelteComponent } from 'svelte';

export interface ArrowUpSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpSlim extends SvelteComponent<ArrowUpSlimProps> {}
