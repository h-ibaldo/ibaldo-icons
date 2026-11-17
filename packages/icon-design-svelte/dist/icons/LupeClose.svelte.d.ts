import { SvelteComponent } from 'svelte';

export interface LupeCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeClose extends SvelteComponent<LupeCloseProps> {}
