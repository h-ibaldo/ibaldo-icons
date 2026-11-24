import { SvelteComponent } from 'svelte';

export interface HotspotDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HotspotDots extends SvelteComponent<HotspotDotsProps> {}
