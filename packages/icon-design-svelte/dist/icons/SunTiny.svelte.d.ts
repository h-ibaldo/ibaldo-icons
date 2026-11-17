import { SvelteComponent } from 'svelte';

export interface SunTinyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunTiny extends SvelteComponent<SunTinyProps> {}
