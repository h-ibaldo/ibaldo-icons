import { SvelteComponent } from 'svelte';

export interface LupeSearchReflexProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearchReflex extends SvelteComponent<LupeSearchReflexProps> {}
