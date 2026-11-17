import { SvelteComponent } from 'svelte';

export interface SunSpokeLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunSpokeLarge extends SvelteComponent<SunSpokeLargeProps> {}
