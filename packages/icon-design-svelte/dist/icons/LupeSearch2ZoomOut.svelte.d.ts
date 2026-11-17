import { SvelteComponent } from 'svelte';

export interface LupeSearch2ZoomOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupeSearch2ZoomOut extends SvelteComponent<LupeSearch2ZoomOutProps> {}
