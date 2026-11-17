import { SvelteComponent } from 'svelte';

export interface TechnicalSupportLaptopGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportLaptopGear extends SvelteComponent<TechnicalSupportLaptopGearProps> {}
