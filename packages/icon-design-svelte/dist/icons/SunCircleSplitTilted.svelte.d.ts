import { SvelteComponent } from 'svelte';

export interface SunCircleSplitTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunCircleSplitTilted extends SvelteComponent<SunCircleSplitTiltedProps> {}
