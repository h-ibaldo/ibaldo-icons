import { SvelteComponent } from 'svelte';

export interface SunDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDotted extends SvelteComponent<SunDottedProps> {}
