import { SvelteComponent } from 'svelte';

export interface LupeSearch3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearch3Check extends SvelteComponent<LupeSearch3CheckProps> {}
