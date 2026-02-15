import { SvelteComponent } from 'svelte';

export interface SunBrightnessSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightnessSquare2 extends SvelteComponent<SunBrightnessSquare2Props> {}
