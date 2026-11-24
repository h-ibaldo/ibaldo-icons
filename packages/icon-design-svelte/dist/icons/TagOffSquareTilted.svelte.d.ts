import { SvelteComponent } from 'svelte';

export interface TagOffSquareTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagOffSquareTilted extends SvelteComponent<TagOffSquareTiltedProps> {}
