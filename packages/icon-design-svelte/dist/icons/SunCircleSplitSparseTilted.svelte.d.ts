import { SvelteComponent } from 'svelte';

export interface SunCircleSplitSparseTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunCircleSplitSparseTilted extends SvelteComponent<SunCircleSplitSparseTiltedProps> {}
