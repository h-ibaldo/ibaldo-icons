import { SvelteComponent } from 'svelte';

export interface SunPointedShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunPointedShort extends SvelteComponent<SunPointedShortProps> {}
