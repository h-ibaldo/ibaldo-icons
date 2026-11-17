import { SvelteComponent } from 'svelte';

export interface HandGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandGear extends SvelteComponent<HandGearProps> {}
