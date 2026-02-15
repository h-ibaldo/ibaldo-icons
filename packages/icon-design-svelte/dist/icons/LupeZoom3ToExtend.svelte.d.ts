import { SvelteComponent } from 'svelte';

export interface LupeZoom3ToExtendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoom3ToExtend extends SvelteComponent<LupeZoom3ToExtendProps> {}
