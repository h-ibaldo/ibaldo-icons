import { SvelteComponent } from 'svelte';

export interface SunGearSettings1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunGearSettings1 extends SvelteComponent<SunGearSettings1Props> {}
