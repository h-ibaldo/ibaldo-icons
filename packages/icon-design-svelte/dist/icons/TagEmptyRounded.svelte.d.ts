import { SvelteComponent } from 'svelte';

export interface TagEmptyRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagEmptyRounded extends SvelteComponent<TagEmptyRoundedProps> {}
