import { SvelteComponent } from 'svelte';

export interface SunSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunSpiky extends SvelteComponent<SunSpikyProps> {}
