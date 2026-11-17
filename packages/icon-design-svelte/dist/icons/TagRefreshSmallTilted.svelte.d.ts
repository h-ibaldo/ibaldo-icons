import { SvelteComponent } from 'svelte';

export interface TagRefreshSmallTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagRefreshSmallTilted extends SvelteComponent<TagRefreshSmallTiltedProps> {}
