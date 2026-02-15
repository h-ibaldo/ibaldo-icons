import { SvelteComponent } from 'svelte';

export interface SunBrightness3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness3 extends SvelteComponent<SunBrightness3Props> {}
