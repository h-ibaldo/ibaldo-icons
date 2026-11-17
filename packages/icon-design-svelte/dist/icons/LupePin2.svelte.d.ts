import { SvelteComponent } from 'svelte';

export interface LupePin2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupePin2 extends SvelteComponent<LupePin2Props> {}
