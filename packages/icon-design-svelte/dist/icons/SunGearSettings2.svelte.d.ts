import { SvelteComponent } from 'svelte';

export interface SunGearSettings2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunGearSettings2 extends SvelteComponent<SunGearSettings2Props> {}
