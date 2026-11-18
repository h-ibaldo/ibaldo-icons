import { SvelteComponent } from 'svelte';

export interface SunCircleSplitSparseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunCircleSplitSparse extends SvelteComponent<SunCircleSplitSparseProps> {}
