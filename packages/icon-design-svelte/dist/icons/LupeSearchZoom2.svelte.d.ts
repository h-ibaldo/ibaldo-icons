import { SvelteComponent } from 'svelte';

export interface LupeSearchZoom2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearchZoom2 extends SvelteComponent<LupeSearchZoom2Props> {}
