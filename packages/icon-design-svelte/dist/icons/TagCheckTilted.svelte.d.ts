import { SvelteComponent } from 'svelte';

export interface TagCheckTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagCheckTilted extends SvelteComponent<TagCheckTiltedProps> {}
