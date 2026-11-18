import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircleLong extends SvelteComponent<ArrowUpCircleLongProps> {}
