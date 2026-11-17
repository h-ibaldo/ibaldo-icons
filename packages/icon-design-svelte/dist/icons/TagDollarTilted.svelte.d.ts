import { SvelteComponent } from 'svelte';

export interface TagDollarTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagDollarTilted extends SvelteComponent<TagDollarTiltedProps> {}
