import { SvelteComponent } from 'svelte';

export interface TechnicalSupportGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TechnicalSupportGear extends SvelteComponent<TechnicalSupportGearProps> {}
