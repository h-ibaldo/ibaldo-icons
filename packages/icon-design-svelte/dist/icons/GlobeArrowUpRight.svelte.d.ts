import { SvelteComponent } from 'svelte';

export interface GlobeArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeArrowUpRight extends SvelteComponent<GlobeArrowUpRightProps> {}
