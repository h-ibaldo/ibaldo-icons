import { SvelteComponent } from 'svelte';

export interface PageViewContinuousProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewContinuous extends SvelteComponent<PageViewContinuousProps> {}
