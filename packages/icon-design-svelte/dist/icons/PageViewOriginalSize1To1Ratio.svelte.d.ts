import { SvelteComponent } from 'svelte';

export interface PageViewOriginalSize1To1RatioProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewOriginalSize1To1Ratio extends SvelteComponent<PageViewOriginalSize1To1RatioProps> {}
