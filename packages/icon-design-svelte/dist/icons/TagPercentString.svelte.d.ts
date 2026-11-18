import { SvelteComponent } from 'svelte';

export interface TagPercentStringProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagPercentString extends SvelteComponent<TagPercentStringProps> {}
