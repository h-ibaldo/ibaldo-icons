import { SvelteComponent } from 'svelte';

export interface SealBannerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SealBanner extends SvelteComponent<SealBannerProps> {}
