import { SvelteComponent } from 'svelte';

export interface LupeMoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeMore extends SvelteComponent<LupeMoreProps> {}
