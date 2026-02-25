import { SvelteComponent } from 'svelte';

export interface HandGearServicesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandGearServices extends SvelteComponent<HandGearServicesProps> {}
