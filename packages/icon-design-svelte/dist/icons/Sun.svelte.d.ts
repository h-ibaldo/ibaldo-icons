import { SvelteComponent } from 'svelte';

export interface SunProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun extends SvelteComponent<SunProps> {}
