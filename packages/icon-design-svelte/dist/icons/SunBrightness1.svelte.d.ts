import { SvelteComponent } from 'svelte';

export interface SunBrightness1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness1 extends SvelteComponent<SunBrightness1Props> {}
