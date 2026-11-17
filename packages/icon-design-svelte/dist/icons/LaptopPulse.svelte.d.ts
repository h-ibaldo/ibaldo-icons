import { SvelteComponent } from 'svelte';

export interface LaptopPulseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopPulse extends SvelteComponent<LaptopPulseProps> {}
