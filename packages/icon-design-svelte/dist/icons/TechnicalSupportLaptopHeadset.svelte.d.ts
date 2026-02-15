import { SvelteComponent } from 'svelte';

export interface TechnicalSupportLaptopHeadsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportLaptopHeadset extends SvelteComponent<TechnicalSupportLaptopHeadsetProps> {}
