import { SvelteComponent } from 'svelte';

export interface TabExtraFeaturesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabExtraFeatures extends SvelteComponent<TabExtraFeaturesProps> {}
