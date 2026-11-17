import { SvelteComponent } from 'svelte';

export interface LupePin4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupePin4 extends SvelteComponent<LupePin4Props> {}
