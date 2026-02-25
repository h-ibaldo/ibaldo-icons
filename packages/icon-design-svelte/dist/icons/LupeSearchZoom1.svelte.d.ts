import { SvelteComponent } from 'svelte';

export interface LupeSearchZoom1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearchZoom1 extends SvelteComponent<LupeSearchZoom1Props> {}
