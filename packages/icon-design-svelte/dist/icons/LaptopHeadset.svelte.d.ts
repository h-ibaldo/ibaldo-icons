import { SvelteComponent } from 'svelte';

export interface LaptopHeadsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopHeadset extends SvelteComponent<LaptopHeadsetProps> {}
