import { SvelteComponent } from 'svelte';

export interface TagStackTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagStackTilted extends SvelteComponent<TagStackTiltedProps> {}
