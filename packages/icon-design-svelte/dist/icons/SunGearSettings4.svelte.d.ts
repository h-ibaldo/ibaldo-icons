import { SvelteComponent } from 'svelte';

export interface SunGearSettings4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunGearSettings4 extends SvelteComponent<SunGearSettings4Props> {}
