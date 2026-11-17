import { SvelteComponent } from 'svelte';

export interface SunShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShort extends SvelteComponent<SunShortProps> {}
