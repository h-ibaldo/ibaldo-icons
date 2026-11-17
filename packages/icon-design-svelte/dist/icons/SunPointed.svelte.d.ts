import { SvelteComponent } from 'svelte';

export interface SunPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunPointed extends SvelteComponent<SunPointedProps> {}
