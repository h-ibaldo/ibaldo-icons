import { SvelteComponent } from 'svelte';

export interface TagBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagBars extends SvelteComponent<TagBarsProps> {}
