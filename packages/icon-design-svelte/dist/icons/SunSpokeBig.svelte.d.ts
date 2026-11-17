import { SvelteComponent } from 'svelte';

export interface SunSpokeBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunSpokeBig extends SvelteComponent<SunSpokeBigProps> {}
