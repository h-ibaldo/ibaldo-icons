import { SvelteComponent } from 'svelte';

export interface FeaturesListStarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FeaturesListStars extends SvelteComponent<FeaturesListStarsProps> {}
