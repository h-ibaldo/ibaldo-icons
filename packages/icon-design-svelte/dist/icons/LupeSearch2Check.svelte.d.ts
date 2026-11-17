import { SvelteComponent } from 'svelte';

export interface LupeSearch2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearch2Check extends SvelteComponent<LupeSearch2CheckProps> {}
