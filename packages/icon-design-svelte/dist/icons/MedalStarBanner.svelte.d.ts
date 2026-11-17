import { SvelteComponent } from 'svelte';

export interface MedalStarBannerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalStarBanner extends SvelteComponent<MedalStarBannerProps> {}
