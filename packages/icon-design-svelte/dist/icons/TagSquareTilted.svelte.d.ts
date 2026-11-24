import { SvelteComponent } from 'svelte';

export interface TagSquareTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagSquareTilted extends SvelteComponent<TagSquareTiltedProps> {}
