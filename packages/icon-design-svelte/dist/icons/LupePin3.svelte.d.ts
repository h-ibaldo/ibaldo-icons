import { SvelteComponent } from 'svelte';

export interface LupePin3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupePin3 extends SvelteComponent<LupePin3Props> {}
