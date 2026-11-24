import { SvelteComponent } from 'svelte';

export interface GlobeDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeDots extends SvelteComponent<GlobeDotsProps> {}
