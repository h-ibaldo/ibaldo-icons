import { SvelteComponent } from 'svelte';

export interface SunBrightness2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness2 extends SvelteComponent<SunBrightness2Props> {}
