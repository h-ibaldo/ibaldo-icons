import { SvelteComponent } from 'svelte';

export interface LupeZoom2ToExtendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeZoom2ToExtend extends SvelteComponent<LupeZoom2ToExtendProps> {}
