import { SvelteComponent } from 'svelte';

export interface SunBrightnessSquare1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightnessSquare1 extends SvelteComponent<SunBrightnessSquare1Props> {}
