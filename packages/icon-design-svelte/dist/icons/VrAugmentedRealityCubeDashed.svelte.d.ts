import { SvelteComponent } from 'svelte';

export interface VrAugmentedRealityCubeDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrAugmentedRealityCubeDashed extends SvelteComponent<VrAugmentedRealityCubeDashedProps> {}
