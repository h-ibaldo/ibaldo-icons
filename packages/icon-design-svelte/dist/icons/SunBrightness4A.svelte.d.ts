import { SvelteComponent } from 'svelte';

export interface SunBrightness4AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness4A extends SvelteComponent<SunBrightness4AProps> {}
