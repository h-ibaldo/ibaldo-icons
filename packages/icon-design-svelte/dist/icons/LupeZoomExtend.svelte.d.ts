import { SvelteComponent } from 'svelte';

export interface LupeZoomExtendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoomExtend extends SvelteComponent<LupeZoomExtendProps> {}
