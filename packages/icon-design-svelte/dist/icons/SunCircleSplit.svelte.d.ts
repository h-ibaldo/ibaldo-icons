import { SvelteComponent } from 'svelte';

export interface SunCircleSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunCircleSplit extends SvelteComponent<SunCircleSplitProps> {}
