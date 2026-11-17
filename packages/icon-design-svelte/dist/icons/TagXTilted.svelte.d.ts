import { SvelteComponent } from 'svelte';

export interface TagXTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagXTilted extends SvelteComponent<TagXTiltedProps> {}
