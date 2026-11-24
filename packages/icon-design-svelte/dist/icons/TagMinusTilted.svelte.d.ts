import { SvelteComponent } from 'svelte';

export interface TagMinusTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagMinusTilted extends SvelteComponent<TagMinusTiltedProps> {}
