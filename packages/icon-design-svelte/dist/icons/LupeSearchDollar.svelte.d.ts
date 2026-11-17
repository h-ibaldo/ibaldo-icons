import { SvelteComponent } from 'svelte';

export interface LupeSearchDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearchDollar extends SvelteComponent<LupeSearchDollarProps> {}
