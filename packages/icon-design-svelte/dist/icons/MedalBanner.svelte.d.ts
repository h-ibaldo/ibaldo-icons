import { SvelteComponent } from 'svelte';

export interface MedalBannerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalBanner extends SvelteComponent<MedalBannerProps> {}
