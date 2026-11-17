import { SvelteComponent } from 'svelte';

export interface LupeCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeCheck extends SvelteComponent<LupeCheckProps> {}
