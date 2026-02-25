import { SvelteComponent } from 'svelte';

export interface Tab1ExtraFeaturesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1ExtraFeatures extends SvelteComponent<Tab1ExtraFeaturesProps> {}
