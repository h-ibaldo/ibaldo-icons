import { SvelteComponent } from 'svelte';

export interface LupeSearchZoom3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearchZoom3 extends SvelteComponent<LupeSearchZoom3Props> {}
