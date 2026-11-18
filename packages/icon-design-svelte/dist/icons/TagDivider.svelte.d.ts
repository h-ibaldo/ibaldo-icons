import { SvelteComponent } from 'svelte';

export interface TagDividerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagDivider extends SvelteComponent<TagDividerProps> {}
