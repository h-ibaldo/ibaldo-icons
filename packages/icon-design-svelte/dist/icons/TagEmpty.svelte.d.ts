import { SvelteComponent } from 'svelte';

export interface TagEmptyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagEmpty extends SvelteComponent<TagEmptyProps> {}
