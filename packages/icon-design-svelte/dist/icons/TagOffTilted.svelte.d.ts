import { SvelteComponent } from 'svelte';

export interface TagOffTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagOffTilted extends SvelteComponent<TagOffTiltedProps> {}
