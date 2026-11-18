import { SvelteComponent } from 'svelte';

export interface TagRefreshTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagRefreshTilted extends SvelteComponent<TagRefreshTiltedProps> {}
