import { SvelteComponent } from 'svelte';

export interface TagTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagTilted extends SvelteComponent<TagTiltedProps> {}
