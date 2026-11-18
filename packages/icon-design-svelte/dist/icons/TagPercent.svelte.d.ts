import { SvelteComponent } from 'svelte';

export interface TagPercentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagPercent extends SvelteComponent<TagPercentProps> {}
